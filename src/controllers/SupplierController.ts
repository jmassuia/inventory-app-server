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
        const {name,address,phone,city,clientId,cnpj,state,client} = req.body

        let data = {
            name,
            address,
            phone,
            city,
            clientId,
            cnpj,
            state,
            client
        }

        try{
            const service = new SupplierService()

            const supplier = await service.addSuppliers(data)

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
}