import { Box, Typography, Button, Modal } from "@mui/material";
import React, { useEffect , useState} from "react";
// import { CartoesForms} from '../../pages/MeioDePagamentos/Cartoes/CartoesForms'


export const ModalPadrao = ({ openModalController }) => {
  console.log('State da props: ', openModalController);
  const [modalController, setModalController ] = useState(openModalController);
  console.log('State do controle do moda: ', modalController);
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

  React.useEffect(() => {
    setModalController(openModalController);
  },[openModalController]);

  const handelCloseModal = () => {
    setModalController(false);
  }

  return (
    <div>
      <Modal
        open={modalController}
        onClose={handelCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Deseja realmente excluir este item ?
          </Typography> */}
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Box display="flex" justifyContent="center" mt="20px">
              {/* <CartoesForms /> */}
            </Box>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
