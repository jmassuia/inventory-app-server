//Importing modules
import express from 'express';
import 'dotenv/config';
import "reflect-metadata";
import cors from 'cors';
import productRoutes from './routes/productRouter';
import clientRoutes from './routes/clientRouter';
import supplierRoutes from './routes/supplierRouter'
import stockRoutes from './routes/stockRouter'

//Create server
const app = express();

//Enable JSON payloads
app.use(express.json());
app.use(cors());

//Routers
app.use('/client',clientRoutes);
app.use('/supplier',supplierRoutes)
app.use('/product',productRoutes);
app.use('/stock',stockRoutes);

//Enable bind connections and listen on the host:port
app.listen(process.env.DEV_PORT,()=>{
    console.log('Server is running!💡');
})