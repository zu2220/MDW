import React, { useState } from 'react';
import { IconButton, Modal, Box, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FormularioLogin from './FormularioLogin';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const UserIconWithModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <div>
      <IconButton onClick={handleOpen} color="primary">
        <AccountCircleIcon fontSize="large" />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-title" variant="h6" component="h2">
            Información de Usuario
          </Typography>
          {/* Pasamos la función mostrarMensaje como prop */}
          <FormularioLogin />
          <IconButton onClick={handleClose} color="secondary" sx={{ mt: 2 }}>
            Cerrar
          </IconButton>
        </Box>
      </Modal>
    </div>
  );
};

export default UserIconWithModal;
