import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import Header from '../../components/header';
import { CardDataGrid } from './CardDataGrid';
import { MeioDePagamento } from './MeioDePagamento';
import { ModalDeExclusao } from '../../components/modalDeExclusao';
import { CartoesCategorias } from '../../components/CartoesCategorias';

import {
  fetchGetMeioDePagamento,
  fetchDeleteMeioDePagamento
} from '../../store/fetchActions/fetchMeioDePagamento';
import {
  fetchModalMeioDePagamento,
} from '../../store/ducks/meioDePagamentoDucks';
import {
  fetchGetMeioDePagamentoCartao,
  fetchGetMeioDePagamentoTipoCartao,
} from '../../store/fetchActions/fetchMeioDePagamento';


export const CardPage = () => {
  const dispatch = useDispatch();
  
  const meioDePagamento = useSelector((state) => state?.meioDePagamento?.dadosMeioDePagamento);
  const usuarioLogado = useSelector((state) => state.userDatas.values);
  const cartao = useSelector((state) => state?.meioDePagamento?.dadosCartao);
  const tipoCartao = useSelector((state) => state?.meioDePagamento?.dadosTipoCartao);

  const [openModalDeleterMeansOfPayment, setOpenModalDeleterMeansOfPayment] = useState(false)

  const [idDeleteMeansOfPayment, setIdDeleteMeansOfPayment] = useState();
  const [idUpdateMeansOfPayment, setIdUpdateMeansOfPayment] = useState();
  const [actionTypeOfMeansOfPayment, setActionTypeOfMeansOfPayment] = useState();
  const [openModalForCartao, setOpenModalForCartao] = useState(false);
  const [openModalForTipoCartao, setOpenModalForTipoCartao] = useState(false);

  React.useEffect(() => {
    dispatch(fetchGetMeioDePagamento(usuarioLogado.codigo));
    dispatch(fetchGetMeioDePagamentoCartao(usuarioLogado.codigo));
    dispatch(fetchGetMeioDePagamentoTipoCartao(usuarioLogado.codigo));
  },[dispatch, usuarioLogado.codigo]);

  const handelCartoesCategoriasForCartoes = () => {
    setOpenModalForCartao(true)
  }
  const handelCloseCartoesCategoriasForCartoes = () => {
    setOpenModalForCartao(false)
  }
  const handleButtonCloseModalCartao = () => {
    setOpenModalForCartao(false)
  }

  const handelTipoDeCartoes = () => {
    setOpenModalForTipoCartao(true);
  }
  const handelCloseTipoDeCartoes = () => {
    setOpenModalForTipoCartao(false);
  }
  const handleButtonCloseModalTipoCartao = () => {
    setOpenModalForTipoCartao(false);
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
        title="CART??ES"
        subtitle="Lista de todos os cart??es"
      />
      <Box display="flex" justifyContent="space-between" mt="20px">
        <Box display="flex" justifyContent="space-between" mt="20px">
          <Button
            onClick={handelCartoesCategoriasForCartoes}
            color="primary"
            variant="contained"
          >
            Cart??oes
          </Button>
          <Button
            onClick={handelTipoDeCartoes}
            color="primary"
            variant="contained"
          >
            Tipo de cart??es
          </Button>
        </Box>
        <p className="spa??o"></p>
        <Button
          onClick={handleMeioDePagamento}
          color="secondary"
          variant="contained"
        >
          Cadastrar um novo meio de pagamento
        </Button>
      </Box>

      <CardDataGrid dados={meioDePagamento} handleExcluir={handleDelete} handleUpdate={handleUpdateMeansOfPayment} />

      <MeioDePagamento idUpdateMeansOfPayment={idUpdateMeansOfPayment} actionTypeOfMeansOfPayment={actionTypeOfMeansOfPayment} />
      <CartoesCategorias
        dados={cartao}
        openModalController={openModalForCartao}
        handelCloseModal={handelCloseCartoesCategoriasForCartoes}
        handleButtonCloseModal={handleButtonCloseModalCartao}
        buttoNameRegister="Cadastrar cart??oes"
        titleRegistration="Cadastrar cart??oes"
        labelForm="Insira um cart??o"
        titleModal="Cart??es"
        subtitleModal="Lista de todos os cart??es"
        nameButtonCadastrarRegistration="Cadastrar cart??o"
        pageColumnsField={{ descricao: 'descricao' }}
        pageColumnsHeaderName={{ columnsHeaderName: 'Cart??o' }}
      />
      <CartoesCategorias
        dados={tipoCartao}
        handelCloseModal={handelCloseTipoDeCartoes}
        openModalController={openModalForTipoCartao}
        handleButtonCloseModal={handleButtonCloseModalTipoCartao}
        buttoNameRegister="Cadastrar tipos de cart??oes"
        titleRegistration="Cadastrar tipos de cart??oes"
        labelForm="Insira um tipo de cart??o"
        titleModal="Tipos de Cart??es"
        subtitleModal="Lista de todos os tipos de cart??es"
        nameButtonCadastrarRegistration="Cadastrar tipo de cart??o"
        pageColumnsField={{ descricao: 'descricao' }}
        pageColumnsHeaderName={{ columnsHeaderName: 'Tipo de cart??o' }}
      />

      <ModalDeExclusao
        opelModal={openModalDeleterMeansOfPayment}
        closeModal={handleCloseModalDeleterMeansOfPayment}
        handleYes={handelDeleterMeansOfPayment}
        codigoDoValorHaPagarHaInativar={idDeleteMeansOfPayment}  
      />

    </Box>
  );
}