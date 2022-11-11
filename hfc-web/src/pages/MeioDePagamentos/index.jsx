import React, { useState } from "react";
import { Box, useTheme, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import Header from '../../components/header';
import { CardDataGrid } from './CardDataGrid';
import { Cartoes } from './Cartoes';
import { TipoDeCartao } from './TipoDeCartao';
import { MeioDePagamento } from './MeioDePagamento';
import { ModalDeExclusao } from '../../components/modalDeExclusao';

import {
  fetchGetMeioDePagamento,
  fetchDeleteMeioDePagamento
} from '../../store/fetchActions/fetchMeioDePagamento';
import {
  fetchModalCadrastraCartoa,
  fetchModalCadrastraTipoCartoa,
  fetchModalMeioDePagamento
} from '../../store/ducks/meioDePagamentoDucks';


export const CardPage = () => {
  const dispatch = useDispatch();
  
  const meioDePagamento = useSelector((state) => state?.meioDePagamento?.dadosMeioDePagamento);
  const usuarioLogado = useSelector((state) => state.userDatas.values);

  const [openModalDeleterMeansOfPayment, setOpenModalDeleterMeansOfPayment] = useState(false)

  const [idDeleteMeansOfPayment, setIdDeleteMeansOfPayment] = useState();
  const [idUpdateMeansOfPayment, setIdUpdateMeansOfPayment] = useState();
  const [actionTypeOfMeansOfPayment, setActionTypeOfMeansOfPayment] = useState();

  React.useEffect(() => {
    dispatch(fetchGetMeioDePagamento(usuarioLogado.codigo));
  },[dispatch, usuarioLogado.codigo]);

  const handelCartoes = () => {
    dispatch(fetchModalCadrastraCartoa(true));
  }
  const handelTipoDeCartoes = () => {
    dispatch(fetchModalCadrastraTipoCartoa(true));
  }
  const handleMeioDePagamento = () => {
    dispatch(fetchModalMeioDePagamento(true));
    setActionTypeOfMeansOfPayment('insert');
  }

  const handleDelete = (id) => {
    const idLinha = id.target.childNodes[1].textContent;

    setOpenModalDeleterMeansOfPayment(true);
    setIdDeleteMeansOfPayment(idLinha);
  }
  const handelDeleterMeansOfPayment = () => {
    dispatch(fetchDeleteMeioDePagamento(idDeleteMeansOfPayment));

    setOpenModalDeleterMeansOfPayment(false);
  }
  const handleCloseModalDeleterMeansOfPayment = () => {
    setOpenModalDeleterMeansOfPayment(false);
  }

  const handleUpdateMeansOfPayment = (id) => {
    const idLinha = id.target.childNodes[1].textContent;
  
    setIdUpdateMeansOfPayment(idLinha);
    dispatch(fetchModalMeioDePagamento(true));
    setActionTypeOfMeansOfPayment('update');
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
        handleExcluir={handleDelete}
        handleUpdate={handleUpdateMeansOfPayment}
      />

      <Cartoes />
      <TipoDeCartao/>
      <MeioDePagamento idUpdateMeansOfPayment={idUpdateMeansOfPayment} actionTypeOfMeansOfPayment={actionTypeOfMeansOfPayment} />

      <ModalDeExclusao
        opelModal={openModalDeleterMeansOfPayment}
        closeModal={handleCloseModalDeleterMeansOfPayment}
        handleYes={handelDeleterMeansOfPayment}
        codigoDoValorHaPagarHaInativar={idDeleteMeansOfPayment}  
      />

    </Box>
  );
}