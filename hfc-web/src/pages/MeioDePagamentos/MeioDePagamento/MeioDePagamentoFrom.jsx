import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";
import { SelectComponente } from '../../../components/SelectComponente';

import {
  fetchModalMeioDePagamento
} from '../../../store/ducks/meioDePagamentoDucks';
import {
  fetchGetMeioDePagamentoCartao,
  fetchGetMeioDePagamentoTipoCartao,
  fetchPostMeioDePagamento,
  fetchPutMeioDePagamentoActions
} from '../../../store/fetchActions/fetchMeioDePagamento';


export const MeioDePagamentoForm = ({ actionTypeOfMeansOfPayment, idUpdateMeansOfPayment }) => {
  const dispatch = useDispatch();
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const cartao = useSelector((state) => state?.meioDePagamento?.dadosCartao);
  const tipoCartao = useSelector((state) => state?.meioDePagamento?.dadosTipoCartao);
  const usuarioLogado = useSelector((state) => state.userDatas.values);

  const [cartaoState, setCartaoState] = useState();
  const [tipoCartaoState, setTipoCartaoState] = useState();

  React.useEffect(() => {
    dispatch(fetchGetMeioDePagamentoCartao(usuarioLogado.codigo));
    dispatch(fetchGetMeioDePagamentoTipoCartao(usuarioLogado.codigo));
  },[dispatch, usuarioLogado.codigo]);

  const handleFormSubmit = (values) => {
    let data = new Date();
    let dia = String(data.getDate()).padStart(2, '0');
    let mes = String(data.getMonth() + 1).padStart(2, '0');
    let ano = data.getFullYear();
    let dataAtual = ano + '-' + mes + '-' + dia;

    const newValues = [];
    newValues.push({ 
      data_cadastro: dataAtual,
      fk_cartao: cartaoState,
      fk_tipo_de_cartao: tipoCartaoState,
      fk_usuario: usuarioLogado.codigo,
    });

    if (actionTypeOfMeansOfPayment === 'insert') {
      dispatch(fetchPostMeioDePagamento(newValues[0]));
    } else {
      dispatch(fetchPutMeioDePagamentoActions(idUpdateMeansOfPayment, newValues[0]))
    }

    dispatch(fetchModalMeioDePagamento(false));
  };
  const handleChangeCartao = (event) => {
    setCartaoState(event.target.value);
  };
  const handleChangeTipoCartao = (event) => {
    setTipoCartaoState(event.target.value);
  };

  const handleCloseModal = () => {
    dispatch(fetchModalMeioDePagamento(false));
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
              <SelectComponente
                dadosSelect={cartao}
                inputLabel="Selecione o cartão"
                handleChange={handleChangeCartao}
                value={values.fk_cartao}
                name="fk_cartao"
                maxWithSelect={800}
                minWidthSelect={230}
              />
              <p className="spaço"></p>
              <SelectComponente
                dadosSelect={tipoCartao}
                inputLabel="Selecione o tipo de cartão"
                handleChange={handleChangeTipoCartao}
                value={values.fk_tipo_de_cartao}
                name="fk_tipo_de_cartao"
                maxWithSelect={800}
                minWidthSelect={230}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained" onClick={handleFormSubmit}>
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
