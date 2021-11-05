//Importing modules
import express from "express";
import 'dotenv/config';
import "reflect-metadata";
import cors from 'cors';
import productRoutes from './routes/productRouter';
import clientRoutes from './routes/clientRouter';

//Create server
const app = express();

//Enable JSON payloads
app.use(express.json());
app.use(cors());

//Routers
app.use('/client',clientRoutes);
app.use('/products',productRoutes);

//Enable bind connections and listen on the host:port
app.listen(process.env.DEV_PORT,()=>{
    console.log('Server is running!💡');
})