import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Checkbox, TablePagination
} from '@mui/material';
import { Visibility, Delete } from '@mui/icons-material';

const ProductsTable = ({ products }) => {
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
      setSelected(products.map(product => product.id));
    } else {
      setSelected([]);
    }
  };

  
  const isSelected = (id) => selected.includes(id);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="products table">
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox
                indeterminate={selected.length > 0 && selected.length < products.length}
                checked={selected.length === products.length}
                onChange={handleSelectAll}
              />
            </TableCell>
            <TableCell>ID Producto</TableCell>
            <TableCell>Nombre del producto</TableCell>
            <TableCell>Precio del producto</TableCell>
            <TableCell>Stock del producto</TableCell>
            <TableCell>Calificación</TableCell>
            <TableCell>Categoría</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((product) => (
            <TableRow key={product.id} selected={isSelected(product.id)}>
              <TableCell padding="checkbox">
                <Checkbox
                  checked={isSelected(product.id)}
                  onChange={() => handleSelect(product.id)}
                />
              </TableCell>
              <TableCell>{product.id}</TableCell>
              <TableCell>{product.nombreProducto}</TableCell>
              <TableCell>{product.precio}</TableCell>
              <TableCell>{product.stock}</TableCell>
              <TableCell>{product.calificacion}</TableCell>
              <TableCell>{product.categoria}</TableCell>
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
        count={products.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}  // Opciones de filas por página
      />
    </TableContainer>
  );
};

export default ProductsTable;
