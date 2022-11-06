import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";

import Header from '../../../components/header';

import {
  fetchPostValorHaPagarActions,
  fetchPutValorHaPagarActions,
} from '../../../store/fetchActions/fetchValorHaPagarActions';
import { fetchModalController } from '../../../store/ducks/modalControlerDucks';


export const FormularioDeCadastroEdicaoExpenses = ({ titulo="", subtitle="", dadosHaEditar}) => {
  const dispatch = useDispatch();
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const isEditando = useSelector((state) => state?.valorHaPagarDatas?.valorHaPagarIsEditando);
  const idLinhaEditar = useSelector((state) => state?.valorHaPagarDatas?.idValorHaPagarEditando);
  const usuarioLogado = useSelector((state) => state.userDatas.values);

  const handleFormSubmit = (values) => {
    const newValues = [];
    newValues.push({ 
      data_vencimento: values.data_vencimento,
      data_cadastro: values.data_cadastro,
      descricao: values.descricao,
      parcelas_pagas: parseInt(values.parcelas_pagas),
      parcelas_totais: parseInt(values.parcelas_totais),
      valor_total: parseFloat(values.valor_total),
      status: "Em aberto",
      status_dados: parseInt(1),
      fk_usuario: usuarioLogado.codigo
    });
    
    if (isEditando) {
      dispatch(fetchPutValorHaPagarActions(idLinhaEditar, newValues[0]));
    } else {
      dispatch(fetchPostValorHaPagarActions(newValues[0]));
    }
    
    dispatch(fetchModalController(false));
  };

  const handleCloseModal = () => {
    dispatch(fetchModalController(false));
  };

  
  return (
    <Box m="20px">
      <Header title={titulo} subtitle={subtitle} />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={dadosHaEditar}
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
                label="Data de Vencimento"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.data_vencimento}
                name="data_vencimento"
                error={!!touched.data_vencimento && !!errors.data_vencimento}
                helperText={touched.data_vencimento && errors.data_vencimento}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Data de cadastro"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.data_cadastro}
                name="data_cadastro"
                error={!!touched.data_cadastro && !!errors.data_cadastro}
                helperText={touched.data_cadastro && errors.data_cadastro}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Descrição da saída"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.descricao}
                name="descricao"
                error={!!touched.descricao && !!errors.descricao}
                helperText={touched.descricao && errors.descricao}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Valor total R$"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.valor_total}
                name="valor_total"
                error={!!touched.valor_total && !!errors.valor_total}
                helperText={touched.valor_total && errors.valor_total}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Qtd de parcelas totais"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.parcelas_totais}
                name="parcelas_totais"
                error={!!touched.parcelas_totais && !!errors.parcelas_totais}
                helperText={touched.parcelas_totais && errors.parcelas_totais}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Qdt de parcelas pagas"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.parcelas_pagas}
                name="parcelas_pagas"
                error={!!touched.parcelas_pagas && !!errors.parcelas_pagas}
                helperText={touched.parcelas_pagas && errors.parcelas_pagas}
                sx={{ gridColumn: "span 2" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Cadastrar saída
              </Button>
              <p className="spaço"></p>
              <Button onClick={handleCloseModal} color="warning" variant="contained">
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
  data_vencimento: yup.string().required("required"),
  data_cadastro: yup.string().required("required"),
  descricao: yup.string().required("required"),
  valor_total: yup.string().required("required"),
  parcelas_totais: yup.string().required("required"),
  parcelas_pagas: yup.string().required("required"),
});
