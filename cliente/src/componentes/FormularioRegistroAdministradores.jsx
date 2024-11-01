// // FormularioRegistro.jsx
// import React, { useState } from 'react';
// import { TextField, Button, Box, Grid } from '@mui/material';
// import axios from 'axios'

// const FormularioRegistroAdministradores = ({ agregarRegistro }) => {
//   const [nombre, setNombre] = useState('');
//   const [apellidos, setApellidos] = useState('');
//   const [correo, setCorreo] = useState('');
//   const [celular, setCelular] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (nombre && apellidos && correo && celular) {
//       agregarRegistro({ nombre, apellidos, correo, celular });
//       try{
//         const response = await axios.post('/api/register',{
//           nombre,
//           apellidos
//         });
//         console.log(response.data);
//         alert("Registro exitoso");
//       }catch(error){
//         console.error('Error',error)
//         alert('Error en el registro');
//       }
//       setNombre('');
//       setApellidos('');
//       setCorreo('');
//       setCelular('');
//     }
//   };

//   return (
//     <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: '600px', margin: '0 auto' }}>
//       <Grid container spacing={2}>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             label="Nombre"
//             variant="outlined"
//             fullWidth
//             value={nombre}
//             onChange={(e) => setNombre(e.target.value)}
//             required
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             label="Apellidos"
//             variant="outlined"
//             fullWidth
//             value={apellidos}
//             onChange={(e) => setApellidos(e.target.value)}
//             required
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             label="Correo Electrónico"
//             type="email"
//             variant="outlined"
//             fullWidth
//             value={correo}
//             onChange={(e) => setCorreo(e.target.value)}
//             required
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             label="Número de Celular"
//             type="tel"
//             variant="outlined"
//             fullWidth
//             value={celular}
//             onChange={(e) => setCelular(e.target.value)}
//             required
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <Button type="submit" variant="contained" color="primary" fullWidth>
//             Registrar
//           </Button>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default FormularioRegistroAdministradores;

import React, { useState } from 'react';
import { TextField, Button, Box, Grid } from '@mui/material';
import axios from 'axios'
const FormularioRegistroAdministradores = ({ agregarRegistro }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email && password) {
      // Llama a la función que agrega el registro
      agregarRegistro({ email, password});

      // Lógica para registrar el usuario en la API
      try {
        const response = await axios.post('http://localhost:3000/api/auth/register', {
            email,
            password
        });

        // Manejar la respuesta exitosa
        console.log('Usuario registrado:', response.data);

        // Resetear campos después del registro
        setEmail('');
        setPassword('');
    } catch (error) {
        console.error('Error registering user:', error.response?.data || error.message);
    }
}
    
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: '600px', margin: '0 auto' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Registrar
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FormularioRegistroAdministradores;