# DesafioDEV

Run 'npm install' inside the root directory to download the project's dependencies.

Use 'node index.js' to run the project on localhost, you can check localhost:8080/mdr directly from your browser but you'll
have to use a tool like Postman to use /transaction.

Trying to post a transaction without using the following format will return an error.
{
  "Valor" : double,
  "Adquirente" : string,
  "Bandeira" : string,
  "Tipo" : string
}
