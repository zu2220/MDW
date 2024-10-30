import React, { useState, useEffect } from 'react';
import { PieChart } from '@mui/x-charts'; 
import { Box } from '@mui/material';      

const PieChartComponent = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Box className="pie-chart" sx={{ width: '100%', height: 'auto' }}>
     <PieChart
  series={[
    {
      data: [
        { id: 0, value: 10, label: 'Lúpulo Dorado', color: 'red' },
        { id: 1, value: 15, label: 'Espuma Salvaje', color: 'green' },
        { id: 2, value: 20, label: 'Malta Brava', color: 'yellow' },
        { id: 3, value: 25, label: 'Cebada del Valle', color: 'blue' },
        { id: 4, value: 30, label: 'Turbo Festín', color: 'purple' },
        { id: 5, value: 35, label: 'Pura Malta', color: 'orange' },
      ],
    },
  ]}
  width={windowWidth < 600 ? windowWidth - 50 : 500}  
  height={windowWidth < 600 ? 200 : 200}
/>
    </Box>
  );
};

export default PieChartComponent;
