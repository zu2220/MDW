import axios from 'axios';

const API_URL = 'http://localhost:5173/administradores';

// export const fetchUsers = async () => {
//     const response = await axios.get(`${API_URL}/users`);
//     return response.data;
//   };

  export const createUser = async (user) => {
    const response = await axios.post(`${API_URL}/register`, user);
    console.log("El metodo crear usuario funciona");
    return response.data;
  };

  //este es un comentario de prueba