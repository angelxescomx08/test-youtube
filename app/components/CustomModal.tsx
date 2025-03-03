import { Modal, Box, Button, Typography } from "@mui/material";
import { Ref, useImperativeHandle, useState } from "react";

export type RefModal = {
  open: VoidFunction;
  close: VoidFunction;
}

interface CustomModalProps {
  componentRef: Ref<RefModal>
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

const CustomModal: React.FC<CustomModalProps> = ({ componentRef }) => {

  const [open,setOpen] = useState(false)

  useImperativeHandle(componentRef,()=>({
    open: ()=> setOpen(true),
    close: ()=>setOpen(false)
  }))

  return (
    <Modal open={open} onClose={()=>{
      setOpen(false)
    }}>
      <Box sx={modalStyle}>
        <Typography variant="h6">¡Este es un modal de MUI!</Typography>
        <Typography variant="body1">Ahora sin useImperativeHandle.</Typography>
        <Button onClick={()=>{
          setOpen(false)
        }} sx={{ mt: 2 }} variant="contained" color="primary">
          Cerrar
        </Button>
      </Box>
    </Modal>
  );
}

export default CustomModal;
