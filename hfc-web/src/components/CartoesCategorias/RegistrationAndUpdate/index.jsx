import React from "react";
import { Box, Typography, Modal } from "@mui/material";
// import { useSelector, useDispatch } from "react-redux";

import { RegistrationAndUpdateForm } from './RegistrationAndUpdateForm';


export const RegistrationAndUpdate = ({
  openModalRegistration, closeModalRegistration, closeButtonModalRegistration,
  titleRegistration, labelForm, nameButtonCadastrarRegistration, tipoOfRegistration,
  actionTypeForRegistration, idForUpdateData
}) => {

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

  return (
    <div>
      <Modal
        open={openModalRegistration}
        onClose={closeModalRegistration}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {titleRegistration}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Box display="flex" justifyContent="center" mt="20px">
              <RegistrationAndUpdateForm
                closeButtonModalRegistration={closeButtonModalRegistration}
                labelForm={labelForm}
                nameButtonCadastrarRegistration={nameButtonCadastrarRegistration}
                tipoOfRegistration={tipoOfRegistration}
                actionTypeForRegistration={actionTypeForRegistration}
                idForUpdateData={idForUpdateData}
              />
            </Box>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
