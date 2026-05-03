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
  yield DECIMAL(4, 2),
  quantoRendeu DECIMAL(10, 2),
  rentabilidade DECIMAL(4, 2)
);

CREATE TABLE Acao (
  idAcao INT PRIMARY KEY AUTO_INCREMENT,
  ticker VARCHAR(7),
  tipo VARCHAR(45) CHECK(tipo IN('Ação', 'FIIs', 'Renda Fixa')),
  preco DECIMAL(10, 2)
);

CREATE TABLE CarteiraAcao (
  fkCarteira INT NOT NULL,
  CONSTRAINT chFkCarteira FOREIGN KEY (fkCarteira) REFERENCES Carteira(idCarteira),
  fkAcao INT NOT NULL,
  CONSTRAINT chFkAcao FOREIGN KEY (fkAcao) REFERENCES Acao(idAcao),
  PRIMARY KEY (fkCarteira, fkAcao),
  quantidade INT
);