var carteiraModel = require("../models/carteiraModel");

function buscarCarteira(req, res) {

    var idYielder = req.body.idYielderServer;

    if (idYielder == undefined) {
        res.status(400).send("ID do Yielder está undefined!");
    } else {

        carteiraModel.buscarCarteira(idYielder)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length >= 1) {
                        console.log(resultadoAutenticar);

                        res.json({
                            idYielder: resultadoAutenticar[0].idYielder,
                            idCarteira: resultadoAutenticar[0].idCarteira
                        });
                    } else {
                        res.status(403).send("Usuario nao tem carteira");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao buscar carteira! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo dashboard.html
    var nomeCarteira = req.body.nomeCarteiraServer;
    var idYielder = req.body.idYielderServer;

    // Faça as validações dos valores
    if (nomeCarteira == undefined) {
        res.status(400).send("Seu nomeCarteira está undefined!");
    } else if (idYielder == undefined) {
        res.status(400).send("Seu idYielder está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo carteiraModel.js
        carteiraModel.cadastrar(nomeCarteira, idYielder)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


module.exports = {
    buscarCarteira,
    cadastrar
}