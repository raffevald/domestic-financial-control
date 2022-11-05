import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch } from "react-redux";
import {
  fetchPostValoresHaPagarJaPagosActions,
  fetchPutValoresHaPagarActions
} from '../../../../store/fetchActions/fetchValoresHaPagarJaPagosActions';
import {
  fetchModalControllerValoresHaPagarJaPagos,
  fetchValorHaPagarJaPagoModalEdicao
} from '../../../../store/ducks/valoresHaPagarJaPagos';
import {
  fetchGetValorHaPagar
} from "../../../../store/fetchActions/fetchValorHaPagarActions";

export const FormDeInserirValorPago = ({ titulo="", subtitle="", codigoValorHaSerPagoJaPago, controlerEdicaoOuInsert, codigoEdicao }) => {
  const dispatch = useDispatch();
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    let data = new Date();
    let dia = String(data.getDate()).padStart(2, '0');
    let mes = String(data.getMonth() + 1).padStart(2, '0');
    let ano = data.getFullYear();
    let dataAtual = ano + '-' + mes + '-' + dia;

    const newValues = [];
    newValues.push({ 
      data_cadastro: dataAtual,
      data_pagamento: values.data_pagamento,
      fk_valores_ha_pagar: parseInt(codigoValorHaSerPagoJaPago),
      valor_pago: parseFloat(values.valor_pago),
    });
    
    if ( controlerEdicaoOuInsert === "edicao" ) {
      dispatch(fetchPutValoresHaPagarActions(codigoEdicao, newValues[0]));
      dispatch(fetchValorHaPagarJaPagoModalEdicao(false));
    } else {
      dispatch(fetchPostValoresHaPagarJaPagosActions(newValues[0]));
      dispatch(fetchGetValorHaPagar());
      dispatch(fetchModalControllerValoresHaPagarJaPagos(false));
    }

  };

  const handleCloseModal = () => {
    dispatch(fetchValorHaPagarJaPagoModalEdicao(false));
  };

  return (
    <Box m="20px">
      {/* <Header title={titulo} subtitle={subtitle} /> */}
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Data do Pagamento"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.data_pagamento}
                name="data_pagamento"
                error={!!touched.data_pagamento && !!errors.data_pagamento}
                helperText={touched.data_pagamento && errors.data_pagamento}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Insira o valor pago"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.valor_pago}
                name="valor_pago"
                error={!!touched.valor_pago && !!errors.valor_pago}
                helperText={touched.valor_pago && errors.valor_pago}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Cadastrar valor pago
              </Button>
              <p className="spaço"></p>
              <Button
                onClick={handleCloseModal}
              color="warning" variant="contained">
                Fechar
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const checkoutSchema = yup.object().shape({
  valor_pago: yup.string().required("required"),
  data_pagamento: yup.string().required("required"),
});
const initialValues = {
  data_pagamento: "",
  data_cadastro : "",
  valor_pago : "",
  fk_valores_ha_pagar : "",
};
