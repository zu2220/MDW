// FormularioRegistro.jsx
import React, { useState } from 'react';
import { TextField, Button, Box, Grid } from '@mui/material';

const FormularioRegistro = ({ agregarRegistro }) => {
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [correo, setCorreo] = useState('');
  const [celular, setCelular] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre && apellidos && correo && celular) {
      agregarRegistro({ nombre, apellidos, correo, celular });
      setNombre('');
      setApellidos('');
      setCorreo('');
      setCelular('');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: '600px', margin: '0 auto' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Nombre"
            variant="outlined"
            fullWidth
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Apellidos"
            variant="outlined"
            fullWidth
            value={apellidos}
            onChange={(e) => setApellidos(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Correo Electrónico"
            type="email"
            variant="outlined"
            fullWidth
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Número de Celular"
            type="tel"
            variant="outlined"
            fullWidth
            value={celular}
            onChange={(e) => setCelular(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Registrar
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FormularioRegistro;
