import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchPostMeioDePagamentoCartao,
  fetchPostMeioDePagamentoTipoDeCartao,
  fetchPutMeioDePagamentoCartaoActions,
  fetchPutMeioDePagamentoTipoDeCartaoActions
} from '../../../store/fetchActions/fetchMeioDePagamento';


export const RegistrationAndUpdateForm = ({
  closeButtonModalRegistration, labelForm, nameButtonCadastrarRegistration,
  tipoOfRegistration, actionTypeForRegistration, idForUpdateData
}) => {
  const dispatch = useDispatch();
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const usuarioLogado = useSelector((state) => state.userDatas.values);

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
      fk_usuario: usuarioLogado.codigo,
    });

    if ( actionTypeForRegistration === "update" ) {
      if (tipoOfRegistration === "Cadastrar cartãoes") {
        dispatch(fetchPutMeioDePagamentoCartaoActions(idForUpdateData, newValues[0]));
      } else {
        dispatch(fetchPutMeioDePagamentoTipoDeCartaoActions(idForUpdateData, newValues[0]));
      }
    } else {
      if (tipoOfRegistration === "Cadastrar cartãoes") {
        dispatch(fetchPostMeioDePagamentoCartao(newValues[0]));
      } else {
        dispatch(fetchPostMeioDePagamentoTipoDeCartao(newValues[0]));
      }
    }

    // dispatch(fetchModalRegistrationController(false));
  };

  return (
    <Box m="20px">
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
                label={labelForm}
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
                {nameButtonCadastrarRegistration}
              </Button>
              <p className="spaço"></p>
              <Button
                onClick={closeButtonModalRegistration}
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
