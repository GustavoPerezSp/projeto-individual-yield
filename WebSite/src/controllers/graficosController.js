var graficosModel = require("../models/graficosModel");

function buscarPatrimonio(req, res) {

    var idYielder = req.params.idYielder;

    graficosModel.buscarPatrimonio(idYielder).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao Buscar o Patrimonio.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


module.exports = {
    buscarPatrimonio
}