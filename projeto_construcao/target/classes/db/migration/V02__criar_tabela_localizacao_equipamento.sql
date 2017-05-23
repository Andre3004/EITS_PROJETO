CREATE TABLE localizacao (
	id serial PRIMARY KEY,
	codlocalizador INTEGER,
	localizacao VARCHAR(144),
	sub_localizacao_id INTEGER,
	responsavel_id INTEGER,
	vice_responsavel_id INTEGER
);

CREATE TABLE equipamento (
	id serial PRIMARY KEY,
	nome VARCHAR(144),
	descricao VARCHAR(256),
	localizacao_id INTEGER,
	sub_equipamento_id INTEGER
);
