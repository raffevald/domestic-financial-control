import React from "react";
import { Box, Typography, Modal } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

import { TipoDeCartaoForm } from './TipoDeCartaoForm';

import {
  fetchModalCadrastraTipoCartoa
} from '../../../store/ducks/meioDePagamentoDucks';


export const TipoDeCartao = () => {
  const dispatch = useDispatch();

  const tipoDeCartap = useSelector((state) => state?.meioDePagamento?.modalCadrastraTipoCartoa);

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
    dispatch(fetchModalCadrastraTipoCartoa(false));
  }

  return (
    <div>
      <Modal
        open={tipoDeCartap}
        onClose={handelCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Cadastro do tipo de cartão
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Box display="flex" justifyContent="center" mt="20px">
              <TipoDeCartaoForm />
            </Box>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
