CREATE DATABASE YieldWay;
USE YieldWay;

CREATE TABLE Yielder(
  idYielder INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(45) NOT NULL,
  nomeDeUsuario VARCHAR(45) NOT NULL UNIQUE,
  dataNascimento DATE NOT NULL,
  email VARCHAR(45) NOT NULL UNIQUE,
  senha VARCHAR(45) NOT NULL
);

CREATE TABLE Carteira(
  idCarteira INT AUTO_INCREMENT,
  fkYielder INT NOT NULL,
  CONSTRAINT chFkYielder FOREIGN KEY (fkYielder) REFERENCES Yielder(idYielder),
  PRIMARY KEY (idCarteira, fkYielder),
  nomeCarteira VARCHAR(45)
);

CREATE TABLE Lancamento (
  idLancamento INT PRIMARY KEY AUTO_INCREMENT,
  ticker VARCHAR(7),
  tipo VARCHAR(45) CHECK(tipo IN('Ação', 'FIIs', 'Renda Fixa')),
  preco DECIMAL(10, 2)
);

CREATE TABLE CarteiraLancamento (
  fkCarteira INT,
  CONSTRAINT chFkCarteira FOREIGN KEY (fkCarteira) REFERENCES Carteira(idCarteira),
  fkLancamento INT,
  CONSTRAINT chFkLancamento FOREIGN KEY (fkLancamento) REFERENCES Lancamento(idLancamento),
  PRIMARY KEY (fkCarteira, fkLancamento),
  quantidade INT,
  dataDaCompra DATE
);

# SELECT PARA AS KPIS

# KPI Total Investido
SELECT SUM(cl.quantidade * l.preco) AS 'TotalInvestido'
FROM CarteiraLancamento cl
JOIN Lancamento l ON cl.fkLancamento = l.idLancamento
JOIN Carteira c ON cl.fkCarteira = c.idCarteira
WHERE c.fkYielder = 1;

# KPI Preco Medio
SELECT ticker, ROUND(AVG(preco * quantidade), 2)
FROM Lancamento l
JOIN CarteiraLancamento cl ON l.idLancamento = cl.fkLancamento
JOIN Carteira c ON cl.fkCarteira = c.idCarteira
WHERE c.fkYielder = 4
GROUP BY ticker;

# Buscar Acoes do Usuario para o Select da KPI PM
SELECT DISTINCT ticker
FROM Lancamento l
JOIN CarteiraLancamento cl ON l.idLancamento = cl.fkLancamento
JOIN Carteira c ON cl.fkCarteira = c.idCarteira
WHERE c.fkYielder = 1;

# KPI Maior Posicao
SELECT l.ticker, SUM(cl.quantidade * l.preco) AS valorTotal
FROM Lancamento l
JOIN CarteiraLancamento cl ON l.idLancamento = cl.fkLancamento
JOIN Carteira c ON cl.fkCarteira = c.idCarteira
WHERE c.fkYielder = 1
GROUP BY l.ticker
ORDER BY valorTotal DESC
LIMIT 1;

# KPI Ticket Medio
# Valor medio cada vez que o usuario faz um aporte
SELECT AVG(cl.quantidade * l.preco) AS Ticket_Medio
FROM CarteiraLancamento cl
JOIN Lancamento l ON cl.fkLancamento = l.idLancamento
JOIN Carteira c ON cl.fkCarteira = c.idCarteira
WHERE c.fkYielder = 1;

# Dados para o Grafico de Barras
SELECT CONCAT(MONTH(dataDaCompra), '/' ,YEAR(dataDaCompra)) AS mesAno, ROUND(SUM(preco * quantidade), 2) AS patrimonioTotal
FROM Lancamento l
JOIN CarteiraLancamento cl ON l.idLancamento = cl.fkLancamento
JOIN Carteira c ON cl.fkCarteira = c.idCarteira
WHERE c.fkYielder = 1
GROUP BY YEAR(dataDaCompra), MONTH(dataDaCompra), mesAno
ORDER BY YEAR(dataDaCompra) DESC, MONTH(dataDaCompra) DESC
LIMIT 12;
