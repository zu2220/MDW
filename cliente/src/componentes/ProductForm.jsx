import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

const ProductForm = ({ agregarProducto }) => {
  const [nombreProducto, setNombreProducto] = useState('');
  const [precio, setPrecio] = useState('');
  const [stock, setStock] = useState('');
  const [calificacion, setCalificacion] = useState('');
  const [categoria, setCategoria] = useState('');

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoProducto = {
      nombreProducto,
      precio: `$${precio}`,
      stock: parseInt(stock),
      calificacion,
      categoria,
    };
    agregarProducto(nuevoProducto); 
    setNombreProducto('');
    setPrecio('');
    setStock('');
    setCalificacion('');
    setCategoria('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Nombre del Producto"
            variant="outlined"
            fullWidth
            value={nombreProducto}
            onChange={(e) => setNombreProducto(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Precio"
            variant="outlined"
            fullWidth
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Stock"
            variant="outlined"
            fullWidth
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Calificación"
            variant="outlined"
            fullWidth
            value={calificacion}
            onChange={(e) => setCalificacion(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Categoría"
            variant="outlined"
            fullWidth
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Agregar Producto
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ProductForm;
