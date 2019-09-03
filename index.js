var express = require('express');
var parser = require('body-parser');
var app = express();

app.use(parser.urlencoded({extended : true}));
app.post("/transaction", function(req, res) {
    res.write("what");
    res.write(JSON.stringify(req.body));
});

app.listen(8080);