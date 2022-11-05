import React, { useEffect , useState} from "react";
import { Box, useTheme, Button } from "@mui/material";
import { tokens } from "../../theme";
import { useSelector, useDispatch } from "react-redux";
import Header from '../../components/header';
import {
  fetchGetByIdValorHaPagarActions,
  // fetchPutValoresHaPagarInativacoaActions,
  fetchDeleteValorHaPagarActions,
  fetchGetValorHaPagar,
  fetchGetValorHaPagarAtivos
} from "../../store/fetchActions/fetchValorHaPagarActions";
import {
  fetchModalController
} from '../../store/ducks/modalControlerDucks';
import { ModalDeExclusao } from '../../components/modalDeExclusao';
import { ModalForm } from './ModalForm';
import {
  fetchModalControllerValorHaPagarByIdEditando,
  fetchModalControllerValorHaPagarIsEditando
} from '../../store/ducks/valorHaPagarDucks';
import { ExpensesDataGrid } from './ExpensesDataGrid';
import { ModalDeInserirValorPago } from '../../components/modalDeInserirValorPago';
import {
  fetchValoresHaPagarJaPagosModal,
  fetchModalControllerValoresHaPagarJaPagos
} from '../../store/ducks/valoresHaPagarJaPagos';
import { ModalAmountsPayableAlreadyPaid } from './AmountsPayableAlreadyPaid/index';
import { fetchGetListaDeValoresJaPagos } from '../../store/fetchActions/fetchValoresHaPagarJaPagosActions';


import './styles.css';


export const Expenses = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  const modalControler = useSelector((state) => state.modalController.modalIsOpen);
  const modalListagemDeValoresPagos = useSelector((state) => state.valoresHaPagarJaPagos?.modalAmountsPayableAlreadyPaid);
  // const { loadingDefault } = useSelector((state) => state.loading?.status);


  const [openModal, setOpenModal] = useState(false);
  const [openModalCadastrar, setOpenModalCadastrar] = useState(false);
  const [modalDeInserirValorPago, setModalDeInserirValorPago] = useState(false);
  // const [gridCompleta, setGridCompleta] = useState(false);
  const [codigoDoValorHaPagarJaPago, setCodigoDoValorHaPagarJaPago] = useState();
  const [codigoDoValorHaPagarHaInativar, setCodigoDoValorHaPagarHaInativar] = useState();
  const [codigoDoValorDeListagemDosValoresPagos, setCodigoDoValorDeListagemDosValoresPagos] = useState();
  const [codigoDoValorHaPagarHaSerDeletado, setCodigoDoValorHaPagarHaSerDeletado]  = useState();


  useEffect(() => {
    setOpenModalCadastrar(modalControler);
  },[modalControler]);

  React.useEffect(() => {
    dispatch(fetchGetValorHaPagarAtivos());
  },[dispatch]);

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
    // setIdASerExcluido(idLinha);
  };

  const handleExcluirSaida = () => {
    dispatch(fetchDeleteValorHaPagarActions(codigoDoValorHaPagarHaSerDeletado));
    // const dadoHaInativar = [
    //   {
    //     "status_dados": 2,
    //   }
    // ];
    // dispatch(fetchPutValoresHaPagarInativacoaActions(codigoDoValorHaPagarHaInativar, dadoHaInativar[0]));
    
    dispatch(fetchGetValorHaPagar());
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
