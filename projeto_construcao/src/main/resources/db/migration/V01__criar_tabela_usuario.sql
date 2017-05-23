CREATE TABLE usuario (
	id serial PRIMARY KEY NOT NULL,
	nome VARCHAR(144),
	email VARCHAR(144),
	senha VARCHAR(50),
	dataNascimento DATE,
	sexo VARCHAR(50),
	permissao VARCHAR(50),
	ativo BOOLEAN DEFAULT TRUE
);