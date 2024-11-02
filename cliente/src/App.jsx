
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
import TablaAdministradores from './componentes/TablaAdministradores';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { createUser } from './api';
import LoginModal from './componentes/LogInModal'; // Importa tu nuevo componente


const App = () => {
  const BlankScreen = () => <div></div>;

  const [users, setUsers] = useState([]);
  const handleAddUser = async (nuevoUsuario) => {
    setUsers([...users, nuevoUsuario]);
    await createUser(nuevoUsuario);
  };

  const [registros, setRegistros] = useState([]);
  const agregarRegistro = (nuevoRegistro) => {
    setRegistros([...registros, nuevoRegistro]);
  };

  const [productos, setProductos] = useState([
    { id: 1, nombreProducto: 'Lúpulo Dorado', precio: "$42", stock: 23, calificacion: '3/5', categoria: 'cerveza' },
    { id: 2, nombreProducto: 'Espuma Salvaje', precio: "$45", stock: 7, calificacion: '3/5', categoria: 'cerveza' },
    // Resto de productos...
  ]);

  const agregarProducto = (nuevoProducto) => {
    setProductos([...productos, { id: productos.length + 1, ...nuevoProducto }]);
  };

  const [openMessages, setOpenMessages] = useState(false);
  const [openNotifications, setOpenNotifications] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado de autenticación
  const [anchorEl, setAnchorEl] = useState(null); // Para el menú del perfil
  const [openLoginModal, setOpenLoginModal] = useState(false); // Estado para el modal


  const handleOpenMessages = () => setOpenMessages(true);
  const handleCloseMessages = () => setOpenMessages(false);
  const handleOpenNotifications = () => setOpenNotifications(true);
  const handleCloseNotifications = () => setOpenNotifications(false);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogin = async () => {
    // Lógica para iniciar sesión, actualizar isAuthenticated
    setIsAuthenticated(true);
    //handleProfileMenuClose();
    setOpenLoginModal(false); // Cierra el modal
  };

  const handleLogout = () => {
    // Lógica para cerrar sesión, actualizar isAuthenticated
    setIsAuthenticated(false);
    handleProfileMenuClose();
    Navigate('/');
  };

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
              <IconButton color="inherit" onClick={handleProfileMenuOpen}>
                <Avatar>U</Avatar>
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleProfileMenuClose}
              >
                {isAuthenticated ? (
                  <MenuItem onClick={handleLogout}>Log Out</MenuItem>
                ) : (
                  <MenuItem onClick={() => setOpenLoginModal(true)}>Log In</MenuItem>
                )}

              </Menu>
            </Box>
          </Toolbar>
        </AppBar>
        <Sidebar isAuthenticated={isAuthenticated} /> {/* Pasa el estado al Sidebar */}
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
                {/* <Cards />
                <GBarras />
                <GraficoPastel />
                <Mapa /> */}
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
            <Route path="/users" element={
              <Box sx={{ display: 'grid', gap: 2 }}>
                <FormularioRegistro agregarRegistro={agregarRegistro} />
                <TablaUsuarios registros={registros} />
              </Box>
            } />
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
            <Route path="/administradores" element={
              <Box sx={{ display: 'grid', gap: 2 }}>
                <FormularioRegistroAdministradores agregarRegistro={agregarRegistro} handleAddUser={handleAddUser} />
                <TablaAdministradores registros={registros} />
              </Box>
            } />
          </Routes>
        </Box>
        <LoginModal open={openLoginModal} onClose={() => setOpenLoginModal(false)} onLogin={handleLogin} /> {/* Añade el modal aquí */}

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

