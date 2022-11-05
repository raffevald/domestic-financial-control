import { Box, Typography, Modal } from "@mui/material";
import { FormDeInserirValorPago } from './FormDeInserirValorPago';
import { useSelector } from "react-redux";


export const ModalDeInserirValorPago = ({ opelModal, closeModal, handleYes, codigoValorHaSerPagoJaPago }) => {
  
  const modalControllerValoresHaPagarJaPagos = useSelector((state) => state?.valoresHaPagarJaPagos?.modalControllerValoresHaPagarJaPagos);

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
        open={modalControllerValoresHaPagarJaPagos}
        onClose={modalControllerValoresHaPagarJaPagos}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Favor inserir o valo pago
          </Typography>
          < FormDeInserirValorPago codigoValorHaSerPagoJaPago={codigoValorHaSerPagoJaPago} />
        </Box>
      </Modal>
    </div>
  );
};
