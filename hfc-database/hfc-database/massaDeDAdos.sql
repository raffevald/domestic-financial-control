INSERT INTO public.perfis_usuarios(
	data_cadastro, descricao)
	VALUES ('2022-11-05', 'usuario');
---------------------------------------------------------------------------------------
INSERT INTO public.usuarios(
	data_cadastro, primeiro_nome, sobrenome, email, senha, avatarurl, fk_perfil_usuario)
	VALUES (
		'2022-11-05',
		'Rafael',
		'Evald Silva',
		'rafaelevaldsilva@gmail.com',
		'2078',
		'https://github.com/raffevald.png',
		1);

-------------------------------------------------------------------------------------
INSERT INTO public.valores_ha_pagar(
	status, data_vencimento, valor_total, descricao, data_cadastro, parcelas_totais, parcelas_pagas, status_dados, fk_usuario)
	VALUES (
		'Em aberto',
		'2022-10-15',
		1762.63,
		'Gastos com lanches',
		'2022-10-28',
		1,
		0,
		1,
		1);
--------------------------------------------------------------------------------------
INSERT INTO public.valores_ha_pagar_ja_pagos(
	data_pagamento, data_cadastro, valor_pago, fk_valores_ha_pagar)
	VALUES ('2022-11-01', '2022-11-01', 1000, 74);

------------------------------------------------------------------------------------
cartao dados
Sicoob
INSERT INTO public.cartaes(
 	data_cadastro, descricao)
	VALUES ( '2022-11-04', 'Sicoob');

INSERT INTO public.tipo_de_cartaes(
	data_cadastro, descricao)
	VALUES ('2022-11-04', 'Crédito');

INSERT INTO public.meio_de_pagamento(
	data_cadastro, fk_cartao, fk_tipo_de_cartao)
	VALUES ('2022-11-04', 1, 1);

Nunbak
INSERT INTO public.cartaes(
 	data_cadastro, descricao)
	VALUES ( '2022-11-04', 'Nubank');

INSERT INTO public.meio_de_pagamento(
	data_cadastro, fk_cartao, fk_tipo_de_cartao)
	VALUES ('2022-11-04', 2, 1);

--