CREATE VIEW meioDePagamento AS
	SELECT
		meio_de_pagamento.codigo,
		cartaes.descricao as cartao,
		tipo_de_cartaes.descricao as tipo,
    	meio_de_pagamento.fk_usuario as userCoder
	FROM meio_de_pagamento
	INNER JOIN cartaes ON cartaes.codigo = meio_de_pagamento.fk_cartao
	INNER JOIN tipo_de_cartaes ON tipo_de_cartaes.codigo = meio_de_pagamento.fk_tipo_de_cartao
	INNER JOIN usuarios ON usuarios.codigo = meio_de_pagamento.fk_usuario;

CREATE VIEW user_infos AS
	SELECT
		usuarios.codigo as codigo,
		usuarios.primeiro_nome as primeiro_nome,
		usuarios.sobrenome as sobrenome,
		usuarios.email as email,
		usuarios.avatarurl as vatar_url,
		perfis_usuarios.descricao as perfil_do_usuario
	FROM usuarios
	INNER JOIN perfis_usuarios ON perfis_usuarios.codigo = usuarios.fk_perfil_usuario;
	