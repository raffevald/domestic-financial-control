import { Box, Typography, Button, Modal } from "@mui/material";
import React, { useState } from "react";
import { CartoesForms } from './CartoesForms';
import { useSelector, useDispatch } from "react-redux";

import {
  fetchModalCadrastraCartoa
} from '../../../store/ducks/meioDePagamentoDucks';


export const Cartoes = ({ openModalController }) => {
  const dispatch = useDispatch();

  const meioDePagamento = useSelector((state) => state?.meioDePagamento?.modalCadrastraCartoa);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#141b2d',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const handelCloseModal = () => {
    dispatch(fetchModalCadrastraCartoa(false));
  }

  return (
    <div>
      <Modal
        open={meioDePagamento}
        onClose={handelCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Cadastro de cartões
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Box display="flex" justifyContent="center" mt="20px">
              <CartoesForms />
            </Box>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
