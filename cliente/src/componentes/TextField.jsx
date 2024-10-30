import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >

    <div>
        <TextField
          required
          id="standard-required"
          label="Nombres"
          defaultValue=""
          variant="standard"
        />
        <TextField
          required
          id="standard-required"
          label="Apellidos"
          defaultValue=""
          variant="standard"
        />
        
    </div>
        <TextField
          required
          id="standard-required"
          label="Correo electrónico"
          defaultValue=""
          variant="standard"
        />
        <TextField
          required
          id="standard-required"
          label="Número de celular"
          defaultValue=""
          variant="standard"
        />
    <div>
        <TextField
          required
          id="standard-required"
          label="DNI"
          defaultValue=""
          variant="standard"
        />
    </div>
        
    </Box>
  );
}