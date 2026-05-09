var express = require("express");
var router = express.Router();

var carteiraController = require("../controllers/carteiraController");

//Recebendo os dados do html e direcionando para a 
// função buscarCarteira de carteiraController.js
router.post("/buscarCarteira", function (req, res) {
    carteiraController.buscarCarteira(req, res);
})

module.exports = router;