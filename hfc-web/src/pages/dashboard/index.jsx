import React, { useState } from 'react';
import { Box, useTheme, Button } from "@mui/material";

import { SelectComponente } from '../../components/SelectComponente';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGetMeioDePagamentoCartao, fetchGetMeioDePagamentoTipoCartao } from '../../store/fetchActions/fetchMeioDePagamento';

import { ModalPadrao } from '../../components/ModalPadrao';



export const Dashboard = () => {
  const dispatch = useDispatch();

  const cartao = useSelector((state) => state?.meioDePagamento?.dadosCartao);
  const tipoCartao = useSelector((state) => state?.meioDePagamento?.dadosTipoCartao);

  const [cart, setCart] = React.useState('');

  const handleChange = (event) => {
    setCart(event.target.value);
    console.log(event.target.value);
  };
  console.log('Valor do set state: ', cart);

  React.useEffect(() => {
    dispatch(fetchGetMeioDePagamentoCartao());
    dispatch(fetchGetMeioDePagamentoTipoCartao());
  },[dispatch]);

  return (
    <Box>
      <SelectComponente
        dadosSelect={cartao}
        inputLabel="Selecione o cartão"
        // value={}
        handleChange={handleChange}
      />
      <SelectComponente
        dadosSelect={tipoCartao}
        inputLabel="Selecione o tipo do cartão"
        // value={}
        // handleChange={}
      />

    <ModalPadrao
      openModalController={true}
    />
    </Box>
    
  );
}
