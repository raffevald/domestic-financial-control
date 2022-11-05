import { Box, Typography, Button, Modal } from "@mui/material";


export const ModalDeExclusao = ({ opelModal, closeModal, handleYes, codigoDoValorHaPagarHaInativar }) => {

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
        open={opelModal}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Deseja realmente excluir este item ?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Box display="flex" justifyContent="center" mt="20px">
              <Button
                onClick={handleYes}
                color="warning"
                variant="contained"
              >
                Sim
              </Button>
              <p className="spaço"></p>
              <Button
                onClick={closeModal}
                color="secondary"
                variant="contained"
              >
                Não
              </Button>
            </Box>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
