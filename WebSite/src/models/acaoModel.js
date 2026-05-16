var database = require("../database/config")


// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function lancamento(stockType, purchaseDate, price, ticker, quantity, idCarteira) {
    console.log("ACESSEI O ACAO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", stockType, purchaseDate, price, ticker, quantity);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO lancamento (ticker, tipo, preco) VALUES
         ('${ticker}', '${stockType}', '${price}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);

    return database.executar(instrucaoSql).then(resultado => {

        let idLancamento = resultado.insertId;

        var instrucaoSql2 = `
        INSERT INTO carteiralancamento (fkCarteira, fkLancamento, quantidade, dataDaCompra) VALUES
        ('${idCarteira}', '${idLancamento}', '${quantity}', '${purchaseDate}');
        `;
        
        console.log("Executando a instrução SQL: \n" + instrucaoSql2);
        database.executar(instrucaoSql2);
    })




}

module.exports = {
    lancamento
};