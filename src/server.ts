//Importing modules
import express from 'express';
import 'dotenv/config';
import "reflect-metadata";

import productRoutes from './routes/productRouter';
import clientRoutes from './routes/clientRouter';
import supplierRoutes from './routes/supplierRouter'

//Create server
const app = express();

//Enable JSON payloads
app.use(express.json());


//Routers
app.use('/client',clientRoutes);
app.use('/suppliers',supplierRoutes)
app.use('/products',productRoutes);

//Enable bind connections and listen on the host:port
app.listen(process.env.DEV_PORT,()=>{
    console.log('Server is running!💡');
})