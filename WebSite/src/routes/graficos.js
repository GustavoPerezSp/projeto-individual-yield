var express = require("express");
var router = express.Router();

var graficosController = require("../controllers/graficosController");

//Recebendo os dados do html e direcionando para a 
// função cadastrar de usuarioController.js
router.get("/patrimonio/:idYielder", function (req, res) {
    graficosController.buscarPatrimonio(req, res);
})

router.get("/porcentagem/:idYielder", function (req, res) {
    graficosController.buscarPorcentagemDosTipos(req, res);
})

module.exports = router;