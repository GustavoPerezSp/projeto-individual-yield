var kpiModel = require("../models/kpiModel");

function buscarKpiTotalInvestido(req, res) {

    var idCarteira = req.params.idCarteira;

    kpiModel.buscarKpiTotalInvestido(idCarteira).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar KPI Total Investido.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


module.exports = {
    buscarKpiTotalInvestido
}