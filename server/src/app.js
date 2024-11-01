import express from 'express';
import morgan from 'morgan';
import authRoutes from './routes/auth.routes.js';
import cors from 'cors';


const app = express()
app.use(cors({
    origin: 'http://localhost:5173', // Permite solo este origen
    methods: ['GET', 'POST'], // Métodos permitidos
    credentials: true // Si necesitas permitir cookies
}));
app.use(morgan('dev'))
app.use(express.json())

app.use('/api/auth',authRoutes)

export default app;
