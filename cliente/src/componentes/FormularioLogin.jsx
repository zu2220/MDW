import React, { useState } from 'react';
import { TextField, Button, Box, Grid, Typography, CircularProgress } from '@mui/material';
import axios from 'axios';

const FormularioLogin = ({ onLogin, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (email && password) {
      try {
        const response = await axios.post('http://localhost:3000/api/auth/login', { email, password });
        const { token } = response.data;
        
        // Guardar el token en localStorage
        localStorage.setItem('token', token);
        
        // Llamar a onLogin para actualizar el estado de autenticación en el componente padre
        onLogin();

        // Reiniciar campos y estados
        setEmail('');
        setPassword('');
        setError('');
        onClose(); // Cerrar el modal al iniciar sesión
      } catch (error) {
        setError(error.response?.data?.message || 'Error al iniciar sesión');
        console.error('Error al iniciar sesión:', error.response?.data || error.message);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: '600px', margin: '0 auto' }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {error && <Typography color="error" variant="body2">{error}</Typography>}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary" fullWidth disabled={loading}>
            {loading ? <CircularProgress size={24} /> : 'Log in'}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FormularioLogin;
