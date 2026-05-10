var acaoModel = require("../models/acaoModel");

function lancamento(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var stockType = req.body.stockTypeServer;
    var purchaseDate = req.body.purchaseDateServer;
    var price = req.body.priceServer;
    var ticker = req.body.tickerServer;
    var quantity = req.body.quantityServer;

    var idCarteira = req.body.idCarteiraServer;

    // Faça as validações dos valores
    if (stockType == undefined) {
        res.status(400).send("Seu stockType está undefined!");
    } else if (purchaseDate == undefined) {
        res.status(400).send("Seu purchaseDate está undefined!");
    } else if (price == undefined) {
        res.status(400).send("Sua price está undefined!");
    } else if (ticker == undefined) {
        res.status(400).send("Sua ticker está undefined!");
    }else if (quantity == undefined) {
        res.status(400).send("Sua quantity está undefined!");
    }else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        acaoModel.lancamento(stockType, purchaseDate, price, ticker, quantity, idCarteira)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao fazer o lancamento! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    lancamento
}