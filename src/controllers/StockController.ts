import {Request,Response} from 'express';
import { StockServices } from '../services/StockServices';


export class StockController{
    async index(req:Request,res:Response){
        try{
            const service = new StockServices

            const stocks = await service.listAllStock()

            if(!stocks){
                return res.status(200).json({
                    data:null
                })
            }

            return res.status(200).json({
                data:stocks
            })
        }catch(err){
            return res.status(501).json({
                message:'An unexpected error ocurred, please reach out the support'
            })
        }
    }
    async findStockByClient(req:Request,res:Response){
        try{
            const service = new StockServices

            const stocks = await service.listStock(parseInt(req.params.id))

            if(!stocks){
                return res.status(200).json({
                    data:null
                })
            }

            return res.status(200).json({
                data:stocks
            })
        }catch(err){
            return res.status(501).json({
                message:'An unexpected error ocurred, please reach out the support'
            })
        }
    }

    async create(req:Request,res:Response){
        const {name,cep,clientId} = req.body
        
        let data = {
            name,
            cep,
            clientId
        }

        try{
            const service = new StockServices()

            const stock = await service.addStock(data)

            return res.status(200).json({
                data:stock
            })
        }catch(err){
            console.log(err)
            return res.status(501).json({
                message:'An unexpected error occurred, please reach out to the support'
            })
        }
    }
    async update(req:Request,res:Response){
        //1) Getting data
        const id = parseInt(req.params.id);
        const data = req.body;

        try{
            const service = new StockServices();
            const updatedProduct = await service.updateStock(id,data);

            return res.status(201).json({
                data:updatedProduct,
                message:'Product updated'
            })
            
        }catch(err){
            console.log(err);
            return res.status(501).json({
                message:'An unexpected error occurred, please reach out to the support'
            })
        }
    }
    async remove(req:Request,res:Response){
        const id = parseInt(req.params.id);
        
        try{
            const service = new StockServices();
            await service.deleteStock(id);

            return res.json(200).json({
                data:null
            })
        }
        catch(err){
            return res.status(501).json({
                message:'An unexpected error occurred, please reach out to the support'
            })
        }
    }
}