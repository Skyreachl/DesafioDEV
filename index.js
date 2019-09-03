// Dependencies

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended : false}));
app.use(bodyParser.json());

// get /mdr

app.get('/mdr', function(req, res) {
    var mdr = [
        {
            "Adquirente" : "Adquirente A",
            "Taxas" : [
                {
                    "Bandeira" : "Visa",
                    "Credito" : 2.25,
                    "Debito" : 2.00
                },
                {
                    "Bandeira" : "Master",
                    "Credito" : 2.35,
                    "Debito" : 1.98
                }
            ]
        },
        {
            "Adquirente" : "Adquirente B",
            "Taxas" : [
                {
                    "Bandeira" : "Visa",
                    "Credito" : 2.50,
                    "Debito" : 2.08
                },
                {
                    "Bandeira" : "Master",
                    "Credito" : 2.65,
                    "Debito" : 1.75
                }
            ]
        },
        {
            "Adquirente" : "Adquirente C",
            "Taxas" : [
                {
                    "Bandeira" : "Visa",
                    "Credito" : 2.75,
                    "Debito" : 2.16
                },
                {
                    "Bandeira" : "Master",
                    "Credito" : 3.10,
                    "Debito" : 1.58
                }
            ]
        }
    ];

    res.header("Content-Type",'application/json');
    res.send(JSON.stringify(mdr, null, 5));
});

// post /transaction

app.post('/transaction', function(req, res) {
    res.header("Content-Type",'application/json');

    var values = Object.values(req.body);

    var valor = values[0];
    var adquirente = values[1];
    var bandeira = values[2];
    var tipo = values[3];

    var validado = false;

    if(adquirente=='A') {
        if(bandeira=='visa') {
            if(tipo=='credito') {
                valor = valor - valor * 0.0225;
                validado = true;
            } else if(tipo=='debito') {
                valor = valor - valor * 0.0200;
                validado = true;
            }
        } else if(bandeira=='master') {
            if(tipo=='credito') {
                valor = valor - valor * 0.0235;
                validado = true;
            } else if(tipo=='debito') {
                valor = valor - valor * 0.0198;
                validado = true;
            }
        }
    } else if(adquirente=='B') {
        if(bandeira=='visa') {
            if(tipo=='credito') {
                valor = valor - valor * 0.0250;
                validado = true;
            } else if(tipo=='debito') {
                valor = valor - valor * 0.0208;
                validado = true;
            }
        } else if(bandeira=='master') {
            if(tipo=='credito') {
                valor = valor - valor * 0.0265;
                validado = true;
            } else if(tipo=='debito') {
                valor = valor - valor * 0.0175;
                validado = true;
            }
        }
    } else if(adquirente=='C') {
        if(bandeira=='visa') {
            if(tipo=='credito') {
                valor = valor - valor * 0.0275;
                validado = true;
            } else if(tipo=='debito') {
                valor = valor - valor * 0.0216;
                validado = true;
            }
        } else if(bandeira=='master') {
            if(tipo=='credito') {
                valor = valor - valor * 0.0310;
                validado = true;
            } else if(tipo=='debito') {
                valor = valor - valor * 0.0158;
                validado = true;
            }
        }
    }

    if(validado==true) {
        res.send(JSON.stringify({"ValorLiquido":valor}, null, 5));
    } else {
        res.send(JSON.stringify({"Error":"Invalid transaction"}, null, 5))
    }
});

app.listen(8080);