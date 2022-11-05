CREATE PROCEDURE SelectValoresHaPagarJaPagos(valoresHaPagarId INTEGER)
LANGUAGE SQL
AS $$
	SELECT * FROM valores_ha_pagar_ja_pagos WHERE valores_ha_pagar_ja_pagos.fk_valores_ha_pagar = valoresHaPagarId;
$$;

--