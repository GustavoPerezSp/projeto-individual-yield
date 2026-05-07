var express = require("express");
var router = express.Router();

var acaoController = require("../controllers/acaoController");

//Recebendo os dados do html e direcionando para a 
// função cadastrar de usuarioController.js
router.post("/lancamento", function (req, res) {
    acaoController.lancamento(req, res);
})

module.exports = router;