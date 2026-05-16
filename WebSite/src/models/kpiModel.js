var database = require("../database/config");

function buscarKpiTotalInvestido(idCarteira) {

    var instrucaoSql = `SELECT 
        SUM(cl.quantidade * l.preco) AS 'TotalInvestido'
        FROM CarteiraLancamento cl
        JOIN Lancamento l ON cl.fkLancamento = l.idLancamento
        JOIN Carteira c ON cl.fkCarteira = c.idCarteira
        WHERE c.fkYielder = 1;`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarKpiTotalInvestido
}
