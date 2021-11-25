import {Request,Response} from 'express';
import { ProductService } from '../services/ProductServices';


export class ProductController{
    async index(req:Request,res:Response){
        try{
            const service = new ProductService

            const Products = await service.listproducts()

            if(!Products){
                return res.status(200).json({
                    data:null
                })
            }

            return res.status(200).json({
                data:Products
            })
        }catch(err){
            return res.status(501).json({
                message:'An unexpected error ocurred, please reach out the support'
            })
        }
    }
    async findProductsByStock(req:Request,res:Response){
        const {id} = req.params
        try{
            const service = new ProductService

            const Products = await service.listProductsByStock(parseInt(id))

            if(!Products){
                return res.status(200).json({
                    data:null
                })
            }

            return res.status(200).json({
                data:Products
            })
        }catch(err){
            console.log(err)
            return res.status(501).json({
                message:'An unexpected error ocurred, please reach out the support'
            })
        }
    }

    async create(req:Request,res:Response){
        const {name,desc,price,quantity,clientId,stockId} = req.body
        
        let data = {
            name,
            desc,
            price,
            quantity,
            clientId,
            stockId
        }

        try{
            const service = new ProductService()

            const Product = await service.addProduct(data)

            return res.status(200).json({
                data:Product
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
            const service = new ProductService();
            const updatedProduct = await service.updateProduct(id,data);

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
            const service = new ProductService();
            await service.deleteProduct(id);

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