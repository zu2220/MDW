// LoginModal.jsx
import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';
import axios from 'axios';

const LoginModal = ({ open, onClose, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', { email, password });
      const { token } = response.data;
      console.log('Inicio de sesión exitoso:', response.data);
      
      // Guardar el token en localStorage (opcional)
      localStorage.setItem('token', token);
      
      setEmail('');
      setPassword('');
      setError('');
      onClose(); // Cerrar el modal al iniciar sesión
      //funcion para que el logout
      //mostrarLogout();
      onLogin(); // Llamar a la función de inicio de sesión
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setError(error.response?.data?.message || 'Error al iniciar sesión');
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Iniciar Sesión</DialogTitle>
      <DialogContent>
        <form onSubmit={handleLogin}>
          <TextField
            autoFocus
            margin="dense"
            label="Correo Electrónico"
            type="email"
            fullWidth
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Contraseña"
            type="password"
            fullWidth
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <DialogActions>
            <Button onClick={onClose}>Cancelar</Button>
            <Button type="submit" color="primary">Iniciar Sesión</Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;