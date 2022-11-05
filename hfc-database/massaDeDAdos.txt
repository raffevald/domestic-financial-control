-------------------------------------------------------------------------------------
public.valores_ha_pagar
INSERT INTO public.valores_ha_pagar(data_vencimento, Status, valor_total, descricao, data_cadastro, parcelas_totais, parcelas_pagas)
VALUES ('2022-10-15', 'Em aberto', 1762.63, 'Gastos com lanches', '2022-10-28', 1, 0);

INSERT INTO public.valores_ha_pagar(data_vencimento, Status, valor_total, descricao, data_cadastro, parcelas_totais, parcelas_pagas)
VALUES ('2022-10-15', 'Pago', 1762.63, 'Gastos com lanches', '2022-10-28', 1, 0);

--------------------------------------------------------------------------------------
public.valores_ha_pagar_ja_pagos
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

