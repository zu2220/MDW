import React from 'react';
import { Box, Typography } from '@mui/material';

const Cards = () => {
  return (
    <Box 
      sx={{ 
        width: '100%', 
        maxWidth: '1200px', 
        margin: '0 auto',   
        padding: 2,         
      }}
    >
      <Typography variant="h4" gutterBottom>
        Resumen de finanzas
      </Typography>
      
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          flexWrap: 'wrap',                
          gap: 2,                          
          marginTop: 2,                     
        }}
      >
        <Box 
          sx={{
            width: '30%',                   
            padding: 2,
            boxShadow: 3,                  
            bgcolor: 'background.paper',   
            borderRadius: 2,                
          }}
        >
          <Typography variant="h6">Miembros</Typography>
          <Typography variant="subtitle1">3,519</Typography>
          <Typography variant="subtitle1" sx={{ color: 'green' }}>+12.5%</Typography>
        </Box>

        <Box 
          sx={{
            width: '30%', 
            padding: 2,
            boxShadow: 3,
            bgcolor: 'background.paper',
            borderRadius: 2,
          }}
        >
          <Typography variant="h6">Ventas</Typography>
          <Typography variant="subtitle1">4,583</Typography>
          <Typography variant="subtitle1" sx={{ color: 'green' }}>+25.6%</Typography>
        </Box>

        <Box 
          sx={{
            width: '30%', 
            padding: 2,
            boxShadow: 3,
            bgcolor: 'background.paper',
            borderRadius: 2,
          }}
        >
          <Typography variant="h6">Finanzas</Typography>
          <Typography variant="subtitle1">12,679</Typography>
          <Typography variant="subtitle1" sx={{ color: 'green' }}>+34.2%</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Cards;
