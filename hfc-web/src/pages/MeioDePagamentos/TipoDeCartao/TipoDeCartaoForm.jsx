import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch } from "react-redux";

import {
  fetchModalCadrastraTipoCartoa
} from '../../../store/ducks/meioDePagamentoDucks';
import {
  fetchPostMeioDePagamentoTipoDeCartao
} from '../../../store/fetchActions/fetchMeioDePagamento';


export const TipoDeCartaoForm = () => {
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
      descricao: values.descricao,
    });

    dispatch(fetchPostMeioDePagamentoTipoDeCartao(newValues[0]));

    dispatch(fetchModalCadrastraTipoCartoa(false));
  };

  const handleCloseModal = () => {
    dispatch(fetchModalCadrastraTipoCartoa(false));
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
                label="Insira o tipo de cartão"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.descricao}
                name="descricao"
                error={!!touched.descricao && !!errors.descricao}
                helperText={touched.descricao && errors.descricao}
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
                color="warning" variant="contained"
              >
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
  descricao: yup.string().required("required"),
});
const initialValues = {
  descricao: "",
};
