import React, { useState } from "react";
import { Box, Typography, Button, Modal } from "@mui/material";
import { useDispatch } from "react-redux";

import { CartoesCategoriasDataGrid } from './CartoesCategoriasDataGrid';
import { RegistrationAndUpdate } from './RegistrationAndUpdate';
import { ModalDeExclusao } from '../modalDeExclusao';
import Header from '../../components/header';

import {
  fetchDeleteMeioDePagamentoCartao,
  fetchDeleteMeioDePagamentoTipoDeCartao
} from '../../store/fetchActions/fetchMeioDePagamento';


export const CartoesCategorias = ({
  dados, buttoNameRegister, openModalController, handelCloseModal,
  handleButtonCloseModal, titleRegistration,  labelForm, nameButtonCadastrarRegistration,
  titleModal, subtitleModal,
  pageColumnsField: { descricao },
  pageColumnsHeaderName: { columnsHeaderName }
}) => {
  const dispatch = useDispatch();

  const [openModalRegistration, setOpenModalRegistration] = useState(false);
  const [tipoOfRegistration, setTipoOfRegistration ] = useState('');
  const [actionTypeRegistration, setActionTypeRegistration] = useState('');
  const [idForUpdateData, setIdForUpdateData]  = useState();
  const [idForDelete, setIdForDelete] = useState();
  const [handleModalExclusao, setHandleModalExclusao] = useState(false);


  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1100,
    bgcolor: '#141b2d',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const handleRegistration = () => {
    setOpenModalRegistration(true);
    setTipoOfRegistration(titleRegistration);
  };
  const handleCloseModalRegistration = () => {
    setOpenModalRegistration(false);
  };
  const closeButtonModalRegistration = () => {
    setOpenModalRegistration(false);
  };


  const handleExcluir = (id) => {
    const idLinha = id.target.childNodes[1].textContent;

    setIdForDelete(idLinha);
    setHandleModalExclusao(true);
  };
  const handleCloseModalExclusao = () => {
    setHandleModalExclusao(false);
  };
  const handleExclusao = () => {
    if ( titleRegistration === "Cadastrar cartãoes" ) {
      dispatch(fetchDeleteMeioDePagamentoCartao(idForDelete));
    } else if ( titleRegistration === "Cadastrar tipos de cartãoes" ) {
      dispatch(fetchDeleteMeioDePagamentoTipoDeCartao(idForDelete));
    }

    setHandleModalExclusao(false);
  };

  const handleUpdate = (id) => {
    const idLinha = id.target.childNodes[1].textContent;

    setOpenModalRegistration(true);
    setTipoOfRegistration(titleRegistration);
    setIdForUpdateData(idLinha);
    setActionTypeRegistration('update');
  };


  return (
    <div>
      <Modal
        open={openModalController}
        onClose={handelCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Header
          title={titleModal}
          subtitle={subtitleModal}
        />
          <Box display="flex" justifyContent="space-between" mt="20px">
              <Button
                onClick={handleButtonCloseModal}
                color="warning" variant="contained"
              >
                Fechar
              </Button>
            <Button
              onClick={handleRegistration}
              color="secondary"
              variant="contained"
            >
              {buttoNameRegister}
            </Button>
          </Box>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Box display="flex" justifyContent="center" mt="20px">
              <CartoesCategoriasDataGrid
                dados={dados}
                handleExcluir={handleExcluir}
                handleUpdate={handleUpdate}
                pageColumnsField={{ descricao: descricao }}
                pageColumnsHeaderName={{ columnsHeaderName: columnsHeaderName }}
              />

              <RegistrationAndUpdate
                openModalRegistration={openModalRegistration}
                closeModalRegistration={handleCloseModalRegistration}
                closeButtonModalRegistration={closeButtonModalRegistration}
                titleRegistration={titleRegistration}
                labelForm={labelForm}
                nameButtonCadastrarRegistration={nameButtonCadastrarRegistration}
                tipoOfRegistration={tipoOfRegistration}
                actionTypeForRegistration={actionTypeRegistration}
                idForUpdateData={idForUpdateData}
              />
              <ModalDeExclusao
                opelModal={handleModalExclusao}
                closeModal={handleCloseModalExclusao}
                handleYes={handleExclusao}
              />
            </Box>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
