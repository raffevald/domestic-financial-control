import React, { useEffect , useState} from "react";
import { Box, useTheme, Button } from "@mui/material";
import { tokens } from "../../theme";
import { useSelector, useDispatch } from "react-redux";
import ReactCardFlip from 'react-card-flip';

import { ModalForm } from './ModalForm';
import Header from '../../components/header';
import { ExpensesDataGrid } from './ExpensesDataGrid';
import { ModalDeExclusao } from '../../components/modalDeExclusao';
import { ModalDeInserirValorPago } from '../../components/modalDeInserirValorPago';

import {
  fetchModalController
} from '../../store/ducks/modalControlerDucks';
import {
  fetchModalControllerValorHaPagarByIdEditando,
  fetchModalControllerValorHaPagarIsEditando
} from '../../store/ducks/valorHaPagarDucks';
import {
  fetchValoresHaPagarJaPagosModal,
  fetchModalControllerValoresHaPagarJaPagos
} from '../../store/ducks/valoresHaPagarJaPagos';
import { ModalAmountsPayableAlreadyPaid } from './AmountsPayableAlreadyPaid/index';
import { fetchGetListaDeValoresJaPagos } from '../../store/fetchActions/fetchValoresHaPagarJaPagosActions';
import {
  fetchDeleteValorHaPagarActions,
  fetchGetByIdValorHaPagarActions,
  fetchGetValoresHaPagarAtivosByUserActions
} from '../../store/fetchActions/fetchValorHaPagarActions';


import './styles.css';


export const Expenses = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  const modalControler = useSelector((state) => state.modalController.modalIsOpen);
  const modalListagemDeValoresPagos = useSelector((state) => state.valoresHaPagarJaPagos?.modalAmountsPayableAlreadyPaid);
  const usuarioLogado = useSelector((state) => state.userDatas.values);
  // const { loadingDefault } = useSelector((state) => state.loading?.status);

  const [openModal, setOpenModal] = useState(false);
  const [openModalCadastrar, setOpenModalCadastrar] = useState(false);
  const [modalDeInserirValorPago, setModalDeInserirValorPago] = useState(false);
  const [gridCompleta, setGridCompleta] = useState(false);
  const [codigoDoValorHaPagarJaPago, setCodigoDoValorHaPagarJaPago] = useState();
  const [codigoDoValorHaPagarHaInativar, setCodigoDoValorHaPagarHaInativar] = useState();
  const [codigoDoValorDeListagemDosValoresPagos, setCodigoDoValorDeListagemDosValoresPagos] = useState();
  const [codigoDoValorHaPagarHaSerDeletado, setCodigoDoValorHaPagarHaSerDeletado]  = useState();


  useEffect(() => {
    setOpenModalCadastrar(modalControler);
  },[modalControler]);

  React.useEffect(() => {
    dispatch(fetchGetValoresHaPagarAtivosByUserActions(usuarioLogado.codigo));
  },[dispatch, usuarioLogado.codigo]);

  const handleClose = () => setOpenModal(false);

  const handleModalsNovaSaida = () => {
    setOpenModalCadastrar(true);
    dispatch(fetchModalController(true));
  };

  const handleCloseModalNovaSaida = () => {
    setOpenModalCadastrar(false);
    dispatch(fetchModalController(false));
  };

  const handleModalExcluirSaida = id => {
    const idLinha = id.target.childNodes[1].textContent;

    setCodigoDoValorHaPagarHaSerDeletado(idLinha);
    setCodigoDoValorHaPagarHaInativar(idLinha);
    setOpenModal(true);
  };

  const handleExcluirSaida = () => {
    dispatch(fetchDeleteValorHaPagarActions(codigoDoValorHaPagarHaSerDeletado));
    setOpenModal(false);
  };

  const handleModalEditarSaida = id => {
    const idLinha = id.target.childNodes[1].textContent;

    dispatch(fetchGetByIdValorHaPagarActions(idLinha));
    dispatch(fetchModalControllerValorHaPagarIsEditando(true));
    dispatch(fetchModalControllerValorHaPagarByIdEditando(idLinha));

    setOpenModalCadastrar(true);
    dispatch(fetchModalController(true));
  };

  const handleModalValorJaPago = id => {
    const idLinha = id.target.childNodes[1].textContent;

    setModalDeInserirValorPago(true);
    setCodigoDoValorHaPagarJaPago(idLinha);
    dispatch(fetchModalControllerValoresHaPagarJaPagos(true));
  };
  const handleCloseModalValorJaPago = () => setModalDeInserirValorPago(false);

  const handleModalListagemValorPago = id => {
    const idLinha = id.target.childNodes[1].textContent;

    dispatch(fetchGetListaDeValoresJaPagos(idLinha));
    setCodigoDoValorDeListagemDosValoresPagos(idLinha);
    dispatch(fetchValoresHaPagarJaPagosModal(true));
  };

  const handleGridCompletada = () => {
    // setGridCompleta(true);
  }

  return (
    <Box m="15px">
      {/* <ReactCardFlip
        isFlipped={gridCompleta}
        flipDirection="vertical"
      >

      </ReactCardFlip> */}
      <Header
        title="DESPESAS"
        subtitle="Lista de todos os gastos"
      />

      <Box
        m="40px 0 0 0"
        height="63vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <Box display="flex" justifyContent="space-between" mt="20px">
          <Button
            onClick={handleGridCompletada}
            color="primary"
            variant="contained"
          >
            Grid completa
          </Button>
          <p className="spaço"></p>
          <Button
            onClick={handleModalsNovaSaida}
            color="secondary"
            variant="contained"
          >
            Cadastrar uma nova saída
          </Button>
        </Box>

        <ExpensesDataGrid
          handleModalExcluirSaida={handleModalExcluirSaida}
          handleModalEditarSaida={handleModalEditarSaida}
          handleModalValorJaPago={handleModalValorJaPago}
          handleModalValorPago={handleModalListagemValorPago}
          // gridCompleta={gridCompleta}
        />
        
        <ModalDeExclusao
          opelModal={openModal}
          closeModal={handleClose}
          handleYes={handleExcluirSaida}
          codigoDoValorHaPagarHaInativar={codigoDoValorHaPagarHaInativar}  
        />

        <ModalForm openModal={openModalCadastrar} closeModal={handleCloseModalNovaSaida} />

        <ModalDeInserirValorPago
          opelModal={modalDeInserirValorPago}
          closeModal={handleCloseModalValorJaPago}
          codigoValorHaSerPagoJaPago={codigoDoValorHaPagarJaPago}
        />

        <ModalAmountsPayableAlreadyPaid
          openModal={modalListagemDeValoresPagos}
          codigoDoValorDeListagemDosValoresPagos={codigoDoValorDeListagemDosValoresPagos}
        />

      </Box>
    </Box>
  );
}
