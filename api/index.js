const server = require('express');
const app = server();

const bodyParse = require('body-parser');
const config= require('config');

app.use(bodyParse.json());

const roteador = require("../rotas/rotaproduto.js");
app.use("/api/produtos", roteador);

app.listen(3000,()=>["Aoba"]);
