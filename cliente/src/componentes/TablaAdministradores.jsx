// TablaRegistros.jsx
import React from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, Paper, TableContainer, Typography } from '@mui/material';

const TablaAdministradores = ({ registros }) => {
  return (
    <TableContainer component={Paper} sx={{ marginTop: 4 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><Typography variant="h6">Email</Typography></TableCell>
            <TableCell><Typography variant="h6">Password</Typography></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {registros.length > 0 ? (
            registros.map((registro, index) => (
              <TableRow key={index}>
                <TableCell>{registro.email}</TableCell>
                <TableCell>{registro.password}</TableCell>
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
