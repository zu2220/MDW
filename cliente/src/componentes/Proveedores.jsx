import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
//import './BasicTable.css';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Malta Masters S.A', 364, 1.2, 78, 10.3),
  createData('Lupulo Verde Ltda.', 354, 3.2, 65, 15),
  createData('Levadura Pura Inc.', 325, 4, 39, 45),
  createData('Agua Premium S.L.', 0, 0, 0, 0),
  createData('Azucar Craft Co.', 387, 0, 99.8, 0),
  createData('Especias Cervezeras S.A.', 251, 3.8, 55, 6.5),
  createData('Frutas Secas Express', 97, 0.3, 25, 1.5),
  createData('Granos Selectos Ltda.', 389, 6.9, 66.3, 10.9),
];
export default function BasicTable() {
  return (
    <div className="table-container">
      <h2>Proveedores</h2>
      <TableContainer component={Paper}>
        <Table className="table" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="table-head-cell">Proveedor</TableCell>
              <TableCell align="right" className="table-head-cell">Calorias</TableCell>
              <TableCell align="right" className="table-head-cell">Grasa(g)</TableCell>
              <TableCell align="right" className="table-head-cell">Carbohidratos(g)</TableCell>
              <TableCell align="right" className="table-head-cell">Proteinas(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
 <TableRow
 key={row.name}
 className="table-row"
 sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
>
 <TableCell component="th" scope="row">
   {row.name}
 </TableCell>
 <TableCell align="right" className="table-cell-right">{row.calories}</TableCell>
 <TableCell align="right" className="table-cell-right">{row.fat}</TableCell>
 <TableCell align="right" className="table-cell-right">{row.carbs}</TableCell>
 <TableCell align="right" className="table-cell-right">{row.protein}</TableCell>
</TableRow>
))}
</TableBody>
</Table>
</TableContainer>
   </div>
  );
}