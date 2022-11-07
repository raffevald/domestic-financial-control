import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {  useSelector } from "react-redux";

import { FormularioDeCadastroEdicaoExpenses } from './FormularioDeCadastroEdicaoExpenses';


export const ModalForm = ({ openModal, closeModal }) => {
  const dadosHaEditar = useSelector((state) => state?.valorHaPagarDatas?.dadosById);

  const styleModalCadastrarSaida = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    bgcolor: '#141b2d',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Modal
        open={openModal}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleModalCadastrarSaida}>
          <FormularioDeCadastroEdicaoExpenses
            dadosHaEditar={dadosHaEditar}
          />
        </Box>
      </Modal>
    </div>
  );
}
