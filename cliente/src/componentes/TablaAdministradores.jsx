// TablaRegistros.jsx
import React from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, Paper, TableContainer, Typography } from '@mui/material';

const TablaAdministradores = ({ registros }) => {
  return (
    <TableContainer component={Paper} sx={{ marginTop: 4 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><Typography variant="h6">Nombre</Typography></TableCell>
            <TableCell><Typography variant="h6">Apellidos</Typography></TableCell>
            <TableCell><Typography variant="h6">Correo Electrónico</Typography></TableCell>
            <TableCell><Typography variant="h6">Celular</Typography></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {registros.length > 0 ? (
            registros.map((registro, index) => (
              <TableRow key={index}>
                <TableCell>{registro.nombre}</TableCell>
                <TableCell>{registro.apellidos}</TableCell>
                <TableCell>{registro.correo}</TableCell>
                <TableCell>{registro.celular}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} align="center">
                No hay registros
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TablaAdministradores;
