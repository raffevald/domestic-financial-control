import React, { useState } from "react";
import { Box, useTheme, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import Header from '../../components/header';
import { CardDataGrid } from './CardDataGrid';
import { Cartoes } from './Cartoes';
import { TipoDeCartao } from './TipoDeCartao';
import { MeioDePagamento } from './MeioDePagamento';

import {
  fetchGetMeioDePagamento
} from '../../store/fetchActions/fetchMeioDePagamento';
import {
  fetchModalCadrastraCartoa,
  fetchModalCadrastraTipoCartoa,
  fetchModalMeioDePagamento
} from '../../store/ducks/meioDePagamentoDucks';


export const CardPage = () => {
  const dispatch = useDispatch();
  
  const meioDePagamento = useSelector((state) => state?.meioDePagamento?.dadosMeioDePagamento);
  

  React.useEffect(() => {
    dispatch(fetchGetMeioDePagamento());
  },[dispatch]);

  const handelCartoes = () => {
    dispatch(fetchModalCadrastraCartoa(true));
  }

  const handelTipoDeCartoes = () => {
    dispatch(fetchModalCadrastraTipoCartoa(true));
  }

  const handleMeioDePagamento = () => {
    dispatch(fetchModalMeioDePagamento(true));
  }

  return (
    <Box m="15px">
      <Header
        title="CARTÕES"
        subtitle="Lista de todos os cartões"
      />
        <Box display="flex" justifyContent="space-between" mt="20px">
          <Box display="flex" justifyContent="space-between" mt="20px">
            <Button
              onClick={handelCartoes}
              color="primary"
              variant="contained"
            >
              Cadastrar cartãoes
            </Button>
            <Button
              onClick={handelTipoDeCartoes}
              color="primary"
              variant="contained"
            >
              Cadastrar tipo de cartões
            </Button>
          </Box>
          <p className="spaço"></p>
          <Button
            onClick={handleMeioDePagamento}
            color="secondary"
            variant="contained"
          >
            Cadastrar um novo meio de pagamento
          </Button>
        </Box>
      <CardDataGrid
        dados={meioDePagamento}
      />

      <Cartoes />
      <TipoDeCartao/>
      <MeioDePagamento />

    </Box>
  );
}