import React from "react";
import { Box, Typography, Modal } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

import { MeioDePagamentoForm } from './MeioDePagamentoFrom';

import {
  fetchModalMeioDePagamento
} from '../../../store/ducks/meioDePagamentoDucks';


export const MeioDePagamento = ({ actionTypeOfMeansOfPayment, idUpdateMeansOfPayment }) => {
  const dispatch = useDispatch();

  const meioDePagamentoModal = useSelector((state) => state?.meioDePagamento?.modalMeioDePagamento);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: '#141b2d',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const handelCloseModal = () => {
    dispatch(fetchModalMeioDePagamento(false));
  }

  return (
    <div>
      <Modal
        open={meioDePagamentoModal}
        onClose={handelCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Cadastro meio de pagamento
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Box display="flex" justifyContent="center" mt="20px">
              <MeioDePagamentoForm idUpdateMeansOfPayment={idUpdateMeansOfPayment} actionTypeOfMeansOfPayment={actionTypeOfMeansOfPayment} />
            </Box>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
