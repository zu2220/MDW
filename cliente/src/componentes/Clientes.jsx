import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Clientes.css'; // Import the CSS file

function createClient(name, phone, email, city) {
  return { name, phone, email, city };
}


const clients = [
  createClient('Juan Pérez', '555-1234', 'juan.perez@example.com', 'Lima'),
  createClient('Ana García', '555-5678', 'ana.garcia@example.com', 'Cusco'),
  createClient('Carlos Ruiz', '555-8765', 'carlos.ruiz@example.com', 'Arequipa'),
  createClient('Lucía Flores', '555-4321', 'lucia.flores@example.com', 'Trujillo'),
  createClient('José Martínez', '555-9876', 'jose.martinez@example.com', 'Piura'),
  
];

export default function ClientTable() {
    return (
      <div className="table-container">
        <h2>Tabla Clientes</h2>
        <TableContainer component={Paper}>
          <Table className="table" aria-label="client table">
            <TableHead>
              <TableRow>
                <TableCell className="table-head-cell">Nombre del cliente</TableCell>
                <TableCell align="right" className="table-head-cell">Celular</TableCell>
                <TableCell align="right" className="table-head-cell">Correo electrónico</TableCell>
                <TableCell align="right" className="table-head-cell">Ciudad</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {clients.map((client) => (
              <TableRow
                key={client.name}
                className="table-row"
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {client.name}
                </TableCell>
                <TableCell align="right" className="table-cell-right">{client.phone}</TableCell>
                <TableCell align="right" className="table-cell-right">{client.email}</TableCell>
                <TableCell align="right" className="table-cell-right">{client.city}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}  