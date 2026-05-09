var database = require("../database/config")

function buscarCarteira(idYielder) {
    console.log("ACESSEI O CARTEIRA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", idYielder)
    var instrucaoSql = `
        SELECT idCarteira FROM carteira WHERE fkYielder = '${idYielder}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarCarteira
};