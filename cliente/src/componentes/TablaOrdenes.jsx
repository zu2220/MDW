import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Chip, IconButton, Checkbox, TablePagination
} from '@mui/material';
import { Visibility, Delete } from '@mui/icons-material';

const orders = [
  { id: "#000253", product: "Lúpulo Dorado", date: "2023-01-02", total: "$42", status: "Shipped", payment: "Visa" },
  { id: "#000254", product: "Espuma Salvaje", date: "2023-01-04", total: "$45", status: "Shipped", payment: "PayPal" },
  { id: "#000255", product: "Malta Brava", date: "2023-01-04", total: "$16", status: "Cancelled", payment: "Mastercard" },
  { id: "#000256", product: "Cebada del Valle", date: "2023-01-08", total: "$55", status: "Shipped", payment: "Visa" },
  { id: "#000257", product: "Turbo Festín", date: "2023-01-09", total: "$45", status: "Shipped", payment: "PayPal" },
  { id: "#000258", product: "Viento Amargo", date: "2023-01-14", total: "$44", status: "Shipped", payment: "Mastercard" },
  { id: "#000259", product: "Tormenta Lager", date: "2023-01-16", total: "$36", status: "Processing", payment: "Visa" },
  { id: "#000260", product: "Barrica de Fuego", date: "2023-01-22", total: "$22", status: "Shipped", payment: "PayPal" },
  { id: "#000261", product: "Lúpulo Dorado", date: "2023-01-22", total: "$42", status: "Cancelled", payment: "Visa" },
  { id: "#000262", product: "Espuma Salvaje", date: "2023-01-23", total: "$45", status: "Shipped", payment: "Mastercard" },
];

const getStatusChip = (status) => {
  switch (status) {
    case 'Shipped':
      return <Chip label="Enviado" color="success" />;
    case 'Cancelled':
      return <Chip label="Cancelado" color="error" />;
    case 'Processing':
      return <Chip label="En proceso" color="warning" />;
    default:
      return <Chip label={status} />;
  }
};

const OrdersTable = () => {
  
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);  
  const [rowsPerPage, setRowsPerPage] = useState(5);

  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  
  const handleSelect = (id) => {
    setSelected(prevSelected => 
      prevSelected.includes(id) 
        ? prevSelected.filter(item => item !== id) 
        : [...prevSelected, id]
    );
  };

  
  const handleSelectAll = (event) => {
    if (event.target.checked) {
      setSelected(orders.map(order => order.id));
    } else {
      setSelected([]);
    }
  };


  const isSelected = (id) => selected.includes(id);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="orders table">
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox
                indeterminate={selected.length > 0 && selected.length < orders.length}
                checked={selected.length === orders.length}
                onChange={handleSelectAll}
              />
            </TableCell>
            <TableCell>ID Orden</TableCell>
            <TableCell>Producto</TableCell>
            <TableCell>Fecha de pedido</TableCell>
            <TableCell>Total</TableCell>
            <TableCell>Estado</TableCell>
            <TableCell>Método de pago</TableCell>
            <TableCell>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((order) => (
            <TableRow key={order.id} selected={isSelected(order.id)}>
              <TableCell padding="checkbox">
                <Checkbox
                  checked={isSelected(order.id)}
                  onChange={() => handleSelect(order.id)}
                />
              </TableCell>
              <TableCell>{order.id}</TableCell>
              <TableCell>{order.product}</TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell>{order.total}</TableCell>
              <TableCell>{getStatusChip(order.status)}</TableCell>
              <TableCell>{order.payment}</TableCell>
              <TableCell>
                <IconButton aria-label="delete">
                  <Delete />
                </IconButton>
                <IconButton aria-label="view">
                  <Visibility />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      
      <TablePagination
        component="div"
        count={orders.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}  
      />
    </TableContainer>
  );
};

export default OrdersTable;
