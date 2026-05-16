var database = require("../database/config");

function buscarKpiTotalInvestido(idYielder) {

    var instrucaoSql = `SELECT 
        SUM(cl.quantidade * l.preco) AS 'TotalInvestido'
        FROM CarteiraLancamento cl
        JOIN Lancamento l ON cl.fkLancamento = l.idLancamento
        JOIN Carteira c ON cl.fkCarteira = c.idCarteira
        WHERE c.fkYielder = ${idYielder};`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarKpiPrecoMedio(idCarteira) {

    var instrucaoSql = ``

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarKpiMaiorPosicao(idYielder) {

    var instrucaoSql = `SELECT 
            l.ticker, SUM(cl.quantidade * l.preco) AS valorTotal
            FROM Lancamento l
            JOIN CarteiraLancamento cl ON l.idLancamento = cl.fkLancamento
            JOIN Carteira c ON cl.fkCarteira = c.idCarteira
            WHERE c.fkYielder = ${idYielder}
            GROUP BY l.ticker
            ORDER BY valorTotal DESC
            LIMIT 1;`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarKpiTicketMedioAporte(idYielder) {

    var instrucaoSql = `SELECT 
            AVG(cl.quantidade * l.preco) AS Ticket_Medio
            FROM CarteiraLancamento cl
            JOIN Lancamento l ON cl.fkLancamento = l.idLancamento
            JOIN Carteira c ON cl.fkCarteira = c.idCarteira
            WHERE c.fkYielder = ${idYielder};`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarKpiTotalInvestido,
    buscarKpiPrecoMedio,
    buscarKpiMaiorPosicao,
    buscarKpiTicketMedioAporte
}
