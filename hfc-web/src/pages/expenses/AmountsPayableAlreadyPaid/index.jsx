import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Button } from "@mui/material";
import Modal from '@mui/material/Modal';
import { AmountsPayableAlreadyPaidDataGrid } from './AmountsPayableAlreadyPaidDataGrid';
import { useSelector, useDispatch } from "react-redux";
import {
  fetchValoresHaPagarJaPagosModal,
  fetchValorHaPagarJaPagoModalExclusao,
  fetchValorHaPagarJaPagoModalEdicao
} from '../../../store/ducks/valoresHaPagarJaPagos';
import { ModalDeExclusao } from '../../../components/modalDeExclusao';
import {
  fetchDeleteValorHaPagarJaPagoActions,
} from '../../../store/fetchActions/fetchValoresHaPagarJaPagosActions';
import { ModalDeInserirEditarValorPago } from './EditarValoresJaPagos';


export const ModalAmountsPayableAlreadyPaid = ({ openModal }) => {
  const dispatch = useDispatch();

  const listagemDeVAloresHaPagarJaPagos = useSelector((state) => state.valoresHaPagarJaPagos?.dados);
  const modalListagemDeValoresPagos = useSelector((state) => state.valoresHaPagarJaPagos?.modalAmountsPayableAlreadyPaid);
  const modalExclusaoValorJaPago = useSelector((state) => state.valoresHaPagarJaPagos?.modalExcluirValorJaPago);
  const modalEdicaoValorJaPago = useSelector((state) => state.valoresHaPagarJaPagos?.modalEdicaoValorJaPago);

  const [deleteValorHaPagarJaPago, setDeleteValorHaPagarJaPago] = useState();
  const [controlerEdicaoOuInsert, setControlerEdicaoOuInsert] = useState();
  const [codigoEdicao, setCodigoEdicao] = useState();

  const dadosTratados = []
  for (let i = 0; i < listagemDeVAloresHaPagarJaPagos?.length; i++) {
    dadosTratados.push({
      id: listagemDeVAloresHaPagarJaPagos[i].codigo,
      valor_pago: `R$ ${listagemDeVAloresHaPagarJaPagos[i].valor_pago.toLocaleString('pt-br', {minimumFractionDigits: 2})}`,
      data_pagamento: `${listagemDeVAloresHaPagarJaPagos[i].data_pagamento[0]}${listagemDeVAloresHaPagarJaPagos[i].data_pagamento[1]}${listagemDeVAloresHaPagarJaPagos[i].data_pagamento[2]}${listagemDeVAloresHaPagarJaPagos[i].data_pagamento[3]}${listagemDeVAloresHaPagarJaPagos[i].data_pagamento[4]}${listagemDeVAloresHaPagarJaPagos[i].data_pagamento[5]}${listagemDeVAloresHaPagarJaPagos[i].data_pagamento[6]}${listagemDeVAloresHaPagarJaPagos[i].data_pagamento[7]}${listagemDeVAloresHaPagarJaPagos[i].data_pagamento[8]}${listagemDeVAloresHaPagarJaPagos[i].data_pagamento[9]}`,
    });
  };

  const styles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "60%",
    bgcolor: '#141b2d',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const handleCloseModal = () => {
    dispatch(fetchValoresHaPagarJaPagosModal(false));
  };

  const handleDeleteValorJaPago = id => {
    const idLinha = id.target.childNodes[1].textContent;

    setDeleteValorHaPagarJaPago(idLinha);
    dispatch(fetchValorHaPagarJaPagoModalExclusao(true));
  };
  const handleCloseModalDeleteValorJaPago = () => {
    dispatch(fetchValorHaPagarJaPagoModalExclusao(false));
  };
  const handleExcluirSaida = () => {
    dispatch(fetchDeleteValorHaPagarJaPagoActions(deleteValorHaPagarJaPago));
    dispatch(fetchValorHaPagarJaPagoModalExclusao(false));
  };

  const handleUpdateValoresHaPagarJaPagos = id => {
    const idLinha = id.target.childNodes[1].textContent;

    dispatch(fetchValorHaPagarJaPagoModalEdicao(true));
    setControlerEdicaoOuInsert('edicao');
    setCodigoEdicao(idLinha);
    // fetchPutValoresHaPagarActions
  }

  return (
    <div>
      <Modal
        open={openModal}
        onClose={modalListagemDeValoresPagos}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles}>
          <Box display="flex" justifyContent="end" mt="20px">
            <Button
              onClick={handleCloseModal}
              color="warning" variant="contained"
            >
              Fechar
            </Button>
          </Box>
          <AmountsPayableAlreadyPaidDataGrid
            dados={dadosTratados}
            handleExcluirValorJaPago={handleDeleteValorJaPago}
            handleUpdateValorJaPago={handleUpdateValoresHaPagarJaPagos}
          />

          <ModalDeExclusao
            opelModal={modalExclusaoValorJaPago}
            closeModal={handleCloseModalDeleteValorJaPago}
            handleYes={handleExcluirSaida}
          />

          <ModalDeInserirEditarValorPago
            opelModal={modalEdicaoValorJaPago}
            controlerEdicaoOuInsert={controlerEdicaoOuInsert}
            codigoEdicao={codigoEdicao}
          />
        </Box>
      </Modal>
    </div>
  );
};
