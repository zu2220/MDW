import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { Typography, Box } from '@mui/material';

const uData = [8000, 800, 2000, 2780, 1890, 2390, 3490, 5000, 5000, 5000, 3000, 9000];
const pData = [8800, 3000, 2000, 3908, 4800, 3800, 4300, 2000, 2000, 0, 0, 0];
const xLabels = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Setiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

export default function StackedBarChart() {
  return (
    <Box 
      sx={{ 
        width: '100%', 
        maxWidth: '1200px', 
        margin: '0 auto',
        padding: 2,       
        boxShadow: 3,       
        bgcolor: 'background.paper', 
        borderRadius: 2,   
      }}
    >
      <Typography variant="h4" gutterBottom>
        Comparación de Ventas por Año
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Datos acumulados del 2023 y 2024
      </Typography>
      <BarChart
        className="bar-chart"
        width={1000}  
        height={300}  
        series={[
          { data: pData, label: '2024', id: 'pvId', color: 'skyblue' },
          { data: uData, label: '2023', id: 'uvId', color: 'grey' },
        ]}
        xAxis={[{ data: xLabels, scaleType: 'band' }]}
      />
    </Box>
  );
}
