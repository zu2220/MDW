import React from 'react';
import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import './Membrecias.css';

const Membrecias = () => {
  return (
    <Box className="membresias-container" sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Membrecías disponibles
      </Typography>
      
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box className="membresias-card">
          <Typography variant="subtitle1"><h3>Membrecias Basica</h3></Typography>
          <Typography variant="subtitle1">$15.00</Typography>
          <br />
          <Typography variant="body2">Acceso a ventas con antelacion</Typography>
          <Typography variant="body2">Descuentos iniciales en ventas</Typography>
          <Typography variant="body2">Notificaciones con noticias y lanzamientos</Typography>
          <Typography variant="body2">Acceso prioritario a cervezas de edicion limitada</Typography>
          <Typography variant="body2"></Typography>
          <br />
          <Button variant="contained">Registrarse</Button>
        </Box>
        <Box className="membresias-card">
          <Typography variant="subtitle1"><h3>Membrecias Premium</h3></Typography>
          <Typography variant="subtitle1">$30.00</Typography>
          <br />
          <Typography variant="body2">Todos los beneficios de la membrecia basica</Typography>
          <Typography variant="body2">Mayores descuentos en compras</Typography>
          <Typography variant="body2">Invitaciones a eventos virtuales</Typography>
          <Typography variant="body2">Acceso prioritario a cervezas de edicion limitada</Typography>
          <Typography variant="body2"></Typography>
          <br />
          <Button variant="contained">Registrarse</Button>
        </Box>
        <Box className="membresias-card">
          <Typography variant="subtitle1"><h3>Membrecias VIP</h3></Typography>
          <Typography variant="subtitle1">$60.00</Typography>
          <br />
          <Typography variant="body2">Todos los beneficios anteriores</Typography>
          <Typography variant="body2">Envio gratuito por fechas especiales</Typography>
          <Typography variant="body2">Acceso exclusivo a cervezas VIP</Typography>
          <Typography variant="body2">Invitaciones a eventos prescenciales</Typography>
          <Typography variant="body2">Asesoramiento personalizado de un maestro cervezero</
          Typography>
          <br />
          <Button variant="contained">Registrarse</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Membrecias;