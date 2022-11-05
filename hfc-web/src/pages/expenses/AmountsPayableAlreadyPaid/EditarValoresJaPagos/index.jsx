import { Box, Typography, Modal } from "@mui/material";
import { FormDeInserirValorPago } from './EditarVarJaPagos';
import { useSelector } from "react-redux";


export const ModalDeInserirEditarValorPago = ({ opelModal, closeModal, handleYes, codigoValorHaSerPagoJaPago, controlerEdicaoOuInsert, codigoEdicao }) => {
  
  const modalEdicaoValorJaPago = useSelector((state) => state.valoresHaPagarJaPagos?.modalEdicaoValorJaPago);

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
        onClose={modalEdicaoValorJaPago}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Favor inserir a data de pagamento e o valo pago
          </Typography>
          < FormDeInserirValorPago
            codigoValorHaSerPagoJaPago={codigoValorHaSerPagoJaPago}
            controlerEdicaoOuInsert={controlerEdicaoOuInsert}
            codigoEdicao={codigoEdicao}
          />
        </Box>
      </Modal>
    </div>
  );
};
