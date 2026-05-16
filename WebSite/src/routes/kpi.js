var express = require("express");
var router = express.Router();

var kpiController = require("../controllers/kpiController");

router.get("/ultimas/:idCarteira", function (req, res) {
    kpiController.buscarKpiTotalInvestido(req, res);
});


module.exports = router;