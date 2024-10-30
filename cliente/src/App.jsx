import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, Box, Toolbar, AppBar, Typography, IconButton, Badge, Avatar, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';

import Sidebar from "./componentes/Sidebar";
import ProductsTable from './componentes/TablaProductos';
import TablaOrdenes from './componentes/TablaOrdenes';
import Clientes from './componentes/Clientes';
import Proveedores from './componentes/Proveedores';
import Cards from "./componentes/cards";
import GBarras from './componentes/GraficoDeBarras';
import TablaUsuarios from './componentes/TablaUsuarios';
import FormularioRegistro from './componentes/FormularioRegistro';
import ProductForm from './componentes/ProductForm';
import GraficoPastel from './componentes/GraficoPastel';
import Mapa from './componentes/Mapa';
import Membresias from './componentes/Membresias';
import FormularioRegistroAdministradores from './componentes/FormularioRegistroAdministradores';
import TablaAdministradores from './componentes/TablaAdministradores'

// import React, { useEffect, useState } from 'react';
import {createUser } from './api';


const App = () => {
  const [users, setUsers] = useState([]);
  const handleAddUser = async (nuevoUsuario) => {
    setUsers([...users,nuevoUsuario]);

    //const newUser = { name: 'John Doe', email: 'john@example.com' };
    await createUser(nuevoUsuario);
    setUsers(await fetchUsers());
  };

  const [registros, setRegistros] = useState([]);

  
  const agregarRegistro = (nuevoRegistro) => {
    setRegistros([...registros, nuevoRegistro]);
  };

 
  const [productos, setProductos] = useState([
    { id: 1, nombreProducto: 'Lúpulo Dorado', precio: "$42", stock: 23, calificacion: '3/5', categoria: 'cerveza' },
    { id: 2, nombreProducto: 'Espuma Salvaje', precio: "$45", stock: 7, calificacion: '3/5', categoria: 'cerveza' },
    { id: 3, nombreProducto: 'Malta Brava', precio: "$16", stock: 9, calificacion: '5/5', categoria: 'cerveza' },
    { id: 4, nombreProducto: 'Cebada del Valle', precio: "$55", stock: 5, calificacion: '5/5', categoria: 'cerveza' },
    { id: 5, nombreProducto: 'Turbo Festín', precio: "$34", stock: 21, calificacion: '4/5', categoria: 'cerveza' },
    { id: 6, nombreProducto: 'Pura Malta', precio: "$24", stock: 43, calificacion: '3/5', categoria: 'cerveza' },
  ]);

  const agregarProducto = (nuevoProducto) => {
    setProductos([...productos, { id: productos.length + 1, ...nuevoProducto }]);
  };


  const [openMessages, setOpenMessages] = useState(false);
  const [openNotifications, setOpenNotifications] = useState(false);

  
  const handleOpenMessages = () => setOpenMessages(true);
  const handleCloseMessages = () => setOpenMessages(false);
  const handleOpenNotifications = () => setOpenNotifications(true);
  const handleCloseNotifications = () => setOpenNotifications(false);

  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6" noWrap component="div">
            Cervecería ¿Qué Pasó Ayer? 🍻
            </Typography>
            <Box>
              <IconButton color="inherit" onClick={handleOpenMessages}>
                <Badge badgeContent={3} color="error">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton color="inherit" onClick={handleOpenNotifications}>
                <Badge badgeContent={4} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton color="inherit">
                <Avatar>U</Avatar>
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        <Sidebar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: 'background.default',
            p: 3,
            marginLeft: '240px',
            marginTop: '64px',
          }}
        >
          <Toolbar />
          <Routes>
          <Route path="/" element={
              <Box sx={{ display: 'grid', gap: 3 }}>
                <Cards />
                <GBarras />
                <GraficoPastel />
                <Mapa />
              </Box>
            } />
            <Route path="/dashboard" element={
              <Box sx={{ display: 'grid', gap: 3 }}>
                <Cards />
                <GBarras />
                <GraficoPastel />
                <Mapa />
              </Box>
            } />
            <Route
              path="/users"
              element={
                <Box sx={{ display: 'grid', gap: 2 }}>
                  <FormularioRegistro agregarRegistro={agregarRegistro} />
                  <TablaUsuarios registros={registros} />
                </Box>
              }
            />
            <Route path="/membresias" element={<Membresias />} />
            <Route path="/ordenes" element={<TablaOrdenes />} />
            <Route path="/productos" element={
              <Box sx={{ display: 'grid', gap: 3 }}>
                <ProductForm agregarProducto={agregarProducto} />
                <ProductsTable products={productos} />
              </Box>
            } />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/proveedores" element={<Proveedores />} />
            <Route
              path="/administradores"
              element={
                <Box sx={{ display: 'grid', gap: 2 }}>
                  <FormularioRegistroAdministradores agregarRegistro={agregarRegistro} handleAddUser={handleAddUser} />
                  <TablaAdministradores registros={registros} />
                </Box>
              }
            />
          </Routes>
        </Box>

        
        <Dialog open={openMessages} onClose={handleCloseMessages}>
          <DialogTitle>Mensajes</DialogTitle>
          <DialogContent>
            <Typography>No tienes nuevos mensajes</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseMessages}>Cerrar</Button>
          </DialogActions>
        </Dialog>

        
        <Dialog open={openNotifications} onClose={handleCloseNotifications}>
          <DialogTitle>Notificaciones</DialogTitle>
          <DialogContent>
            <Typography>No tienes nuevas notificaciones</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseNotifications}>Cerrar</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Router>
  );
};

export default App;
