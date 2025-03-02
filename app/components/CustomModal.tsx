import { Modal, Box, Button, Typography } from "@mui/material";

interface CustomModalProps {
  open: boolean;
  onClose: () => void;
}

const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const CustomModal: React.FC<CustomModalProps> = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyle}>
        <Typography variant="h6">¡Este es un modal de MUI!</Typography>
        <Typography variant="body1">Ahora sin useImperativeHandle.</Typography>
        <Button onClick={onClose} sx={{ mt: 2 }} variant="contained" color="primary">
          Cerrar
        </Button>
      </Box>
    </Modal>
  );
}

export default CustomModal;
