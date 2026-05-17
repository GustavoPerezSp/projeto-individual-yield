var kpiModel = require("../models/kpiModel");

function buscarKpiTotalInvestido(req, res) {

    var idYielder = req.params.idYielder;

    kpiModel.buscarKpiTotalInvestido(idYielder).then(function (resultado) {
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

function buscarKpiPrecoMedio(req, res) {

    var idYielder = req.params.idYielder;
    var stock = req.params.stock

    kpiModel.buscarKpiPrecoMedio(idYielder, stock).then(function (resultado) {
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

function buscarAcoesSelectKpiPrecoMedio(req, res) {

    var idYielder = req.params.idYielder;

    kpiModel.buscarAcoesSelectKpiPrecoMedio(idYielder).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar Acoes do Select.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarKpiMaiorPosicao(req, res) {

    var idYielder = req.params.idYielder;

    kpiModel.buscarKpiMaiorPosicao(idYielder).then(function (resultado) {
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

function buscarKpiTicketMedioAporte(req, res) {

    var idYielder = req.params.idYielder;

    kpiModel.buscarKpiTicketMedioAporte(idYielder).then(function (resultado) {
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
    buscarKpiTotalInvestido,
    buscarKpiPrecoMedio,
    buscarAcoesSelectKpiPrecoMedio,
    buscarKpiMaiorPosicao,
    buscarKpiTicketMedioAporte
}