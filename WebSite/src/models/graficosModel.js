var database = require("../database/config")

function buscarPatrimonio(idYielder) {
    console.log("ACESSEI O Graficos MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarPatrimonio(): ", idYielder)
    
    var instrucaoSql = `SELECT 
            CONCAT(MONTH(dataDaCompra), '/' ,YEAR(dataDaCompra)) AS mesAno,
            ROUND(SUM(preco * quantidade), 2) AS patrimonioTotal
            FROM Lancamento l
            JOIN CarteiraLancamento cl ON l.idLancamento = cl.fkLancamento
            JOIN Carteira c ON cl.fkCarteira = c.idCarteira
            WHERE c.fkYielder = ${idYielder}
            GROUP BY mesAno
            ORDER BY mesAno DESC
            LIMIT 12;`;



    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarPatrimonio
};