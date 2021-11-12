import {Request,Response} from 'express';
import { SupplierService } from '../services/SupplierServices';


export class SupplierController{
    async index(req:Request,res:Response){
        try{
            const service = new SupplierService

            const suppliers = await service.listSuppliers()

            if(!suppliers){
                return res.status(200).json({
                    data:null
                })
            }

            return res.status(200).json({
                data:suppliers
            })
        }catch(err){
            return res.status(501).json({
                message:'An unexpected error ocurred, please reach out the support'
            })
        }
    }

    async create(req:Request,res:Response){
        const {name,address,phone,city,clientId,cnpj,uf} = req.body

        let data = {
            name,
            address,
            phone,
            city,
            clientId,
            cnpj,
            uf
        }

        try{
            const service = new SupplierService()

            const supplier = await service.addSupplier(data)

            return res.status(200).json({
                data:supplier
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
            const service = new SupplierService();
            const updatedSupplier = await service.updateSupplier(id,data);

            return res.status(201).json({
                data:updatedSupplier,
                message:'Supplier updated'
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
            const service = new SupplierService();
            await service.deleteSupplier(id);

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