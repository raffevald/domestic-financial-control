  "ConnectionStrings": {
    "Default": "User Id=postgres; Password='password'; Host=localhost; Port=5432; Database= DomesticFinancialController"
  },

CREATE TABLE perfis_usuarios (
	codigo SERIAL NOT NULL UNIQUE,
	data_cadastro DATE NOT NULL,
	descricao VARCHAR(50) NOT NULL UNIQUE,
	
	CONSTRAINT perfis_usuarios_primary_key PRIMARY KEY (codigo)
);

CREATE TABlE usuarios (
	codigo SERIAL NOT NULL UNIQUE,
	data_cadastro DATE NOT NULL,
	primeiro_nome VARCHAR(30),
	sobrenome VARCHAR(100),
	email VARCHAR(200),
	senha VARCHAR(250),
	avatarUrl VARCHAR(250),
	fk_perfil_usuario INTEGER NOT NULL,
	
	CONSTRAINT usuarios_primary_key PRIMARY KEY (codigo),
	
	FOREIGN KEY (fk_perfil_usuario) REFERENCES perfis_usuarios(Codigo)
);

CREATE TABLE valores_ha_pagar(
	Codigo SERIAL NOT NULL,
	Status VARCHAR(10) NOT NULL,
	Data_Vencimento DATE NOT NULL,
	Valor_Total NUMERIC(10,2) NOT NULL,
	Descricao VARCHAR(250) NOT NULL,
	Data_Cadastro DATE NOT NULL,
	Parcelas_Totais INTEGER NOT NULL,
	Parcelas_Pagas INTEGER,
	status_dados INTEGER  NOT NULL,
	
	fk_usuario INTEGER  NOT NULL,
	FOREIGN KEY (fk_usuario) REFERENCES usuarios(Codigo),
	CONSTRAINT valores_ha_pagar_primary_key PRIMARY KEY (codigo)
);

CREATE TABLE valores_ha_pagar_ja_pagos(
	codigo SERIAL NOT NULL,
	data_pagamento DATE NOT NULL,
	data_cadastro DATE NOT NULL,
	valor_pago NUMERIC(10,2) NOT NULL,

	fk_valores_ha_pagar INTEGER NOT NULL,
	fk_usuario INTEGER  NOT NULL,
	FOREIGN KEY (fk_usuario) REFERENCES usuarios(Codigo),

	CONSTRAINT valores_ha_pagar_ja_pagos_primary_key PRIMARY KEY (codigo),
	FOREIGN KEY (fk_valores_ha_pagar) REFERENCES valores_ha_pagar(Codigo)
);

CREATE TABLE cartaes(
	codigo SERIAL NOT NULL,
	data_cadastro DATE NOT NULL,
	descricao VARCHAR(30) NOT NULL,
	
	fk_usuario INTEGER  NOT NULL,
	FOREIGN KEY (fk_usuario) REFERENCES usuarios(Codigo),
	CONSTRAINT cartaes_primary_key PRIMARY KEY (codigo)
);

CREATE TABLE tipo_de_cartaes(
	codigo SERIAL NOT NULL,
	data_cadastro DATE NOT NULL,
	descricao VARCHAR(30) NOT NULL,

	fk_usuario INTEGER  NOT NULL,
	FOREIGN KEY (fk_usuario) REFERENCES usuarios(Codigo),
	CONSTRAINT tipo_de_cartaes_primary_key PRIMARY KEY (codigo)
);

CREATE TABLE meio_de_pagamento(
	codigo SERIAL NOT NULL,
	data_cadastro DATE NOT NULL,
	fk_cartao INTEGER,
	fk_tipo_de_cartao INTEGER,
	fk_usuario INTEGER  NOT NULL,
	FOREIGN KEY (fk_usuario) REFERENCES usuarios(Codigo),
	CONSTRAINT meio_pagamento_primary_key PRIMARY KEY (codigo),

	FOREIGN KEY (fk_cartao) REFERENCES cartaes(Codigo),
	FOREIGN KEY (fk_tipo_de_cartao) REFERENCES tipo_de_cartaes(Codigo)
);





----------------------
CREATE TABLE categoria(
	codigo SERIAL NOT NULL,
	data_cadastro DATE NOT NULL,
	descricao VARCHAR(30) NOT NULL,
	fk_usuario INTEGER  NOT NULL,
	FOREIGN KEY (fk_usuario) REFERENCES usuarios(Codigo),
	CONSTRAINT categoria_primary_key PRIMARY KEY (codigo)
);

CREATE TABLE categoria_sub(
	codigo SERIAL NOT NULL,
	data_cadastro DATE NOT NULL,
	descricao VARCHAR(30) NOT NULL,
	fk_usuario INTEGER  NOT NULL,
	FOREIGN KEY (fk_usuario) REFERENCES usuarios(Codigo),
	CONSTRAINT categoria_sub_primary_key PRIMARY KEY (codigo)
);

CREATE TABLE categoria_e_sub_categoria(
	codigo SERIAL NOT NULL,
	data_cadastro DATE NOT NULL,
	fk_categoria INTEGER,
	
	fk_ategoria_sub INTEGER,
	fk_usuario INTEGER  NOT NULL,
	FOREIGN KEY (fk_usuario) REFERENCES usuarios(Codigo),
	CONSTRAINT categoria_e_sub_categoria_primary_key PRIMARY KEY (codigo),

	FOREIGN KEY (fk_categoria) REFERENCES categoria(Codigo),
	FOREIGN KEY (fk_ategoria_sub) REFERENCES categoria_sub(Codigo)
);

----------------------------------------
CREATE VIEW ValoresHaPagar AS
	SELECT
		valores_ha_pagar.Codigo,
		valores_ha_pagar.Status,
		valores_ha_pagar.Data_Vencimento,
		valores_ha_pagar.Valor_Total,
		valores_ha_pagar.Descricao,
		valores_ha_pagar.Data_Cadastro,
		valores_ha_pagar.Parcelas_Totais,
		valores_ha_pagar.Parcelas_Pagas,
		COALESCE(SUM(valores_ha_pagar_ja_pagos.valor_pago), 0) as valor_total_pago,
		usuarios.codigo AS useCode
	FROM valores_ha_pagar
	LEFT JOIN valores_ha_pagar_ja_pagos ON valores_ha_pagar_ja_pagos.fk_valores_ha_pagar = valores_ha_pagar.Codigo
	INNER JOIN usuarios ON valores_ha_pagar.fk_usuario = usuarios.codigo
	WHERE valores_ha_pagar.status_dados = 1
	GROUP BY valores_ha_pagar.Codigo, usuarios.codigo;
	


CREATE VIEW categoriaESubcategoria AS
	SELECT
		categoria_e_sub_categoria.codigo,
		categoria.descricao as categoria,
		categoria_sub.descricao as subcategoria
	FROM categoria_e_sub_categoria
	INNER JOIN categoria ON categoria.codigo = categoria_e_sub_categoria.fk_categoria
	INNER JOIN categoria_sub ON categoria_sub.codigo = categoria_e_sub_categoria.fk_ategoria_sub;

--------------------------------------------
delimiter //CREATE TRIGGER nome_TriggerAFTER INSERT ON usuario_votoFOR EACH ROWBEGINAqui você coloca a estrutura do trigger.END //delimiter ;



	











