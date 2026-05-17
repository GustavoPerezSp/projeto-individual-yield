var express = require("express");
var router = express.Router();

var kpiController = require("../controllers/kpiController");

router.get("/total/:idYielder", function (req, res) {
    kpiController.buscarKpiTotalInvestido(req, res);
});

router.get("/medio/:idYielder/:stock", function (req, res) {
    kpiController.buscarKpiPrecoMedio(req, res);
});

router.get("/acoes/:idYielder", function (req, res) {
    kpiController.buscarAcoesSelectKpiPrecoMedio(req, res);
});

router.get("/maior/:idYielder", function (req, res) {
    kpiController.buscarKpiMaiorPosicao(req, res);
});

router.get("/ticket/:idYielder", function (req, res) {
    kpiController.buscarKpiTicketMedioAporte(req, res);
});

module.exports = router;