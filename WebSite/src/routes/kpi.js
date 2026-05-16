var express = require("express");
var router = express.Router();

var kpiController = require("../controllers/kpiController");

router.get("/total/:idCarteira", function (req, res) {
    kpiController.buscarKpiTotalInvestido(req, res);
});

router.get("/medio/:idCarteira", function (req, res) {
    kpiController.buscarKpiPrecoMedio(req, res);
});

router.get("/maior/:idCarteira", function (req, res) {
    kpiController.buscarKpiMaiorPosicao(req, res);
});

router.get("/ticket/:idCarteira", function (req, res) {
    kpiController.buscarKpiTicketMedioAporte(req, res);
});


module.exports = router;