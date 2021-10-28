import {Request,response,Response} from 'express';
import {genSalt,hash} from 'bcrypt';
import { ClientService } from '../services/ClientServices';


export class ClientController{
    async index(req:Request,res:Response){
        //1) Try to list all the clients
        try{
            const service = new ClientService;

            const clients = await service.listClients();

            if(!clients){
                return res.status(200).json({
                    data:null
                });
            }

            return res.status(200).json({
                data:clients
            })
        }catch(err){
            return res.status(501).json({
                message:'An unexpected error occurred, please reach out to the support'
            })
        }
    }
    async create(req:Request,res:Response){
        //1) Get body data
        const {name,email,password,CNPJ} = req.body;

        //2) Hash password
        const salt = await genSalt(10);
        const hashPassword = await hash(password,salt);

        var data = {
            name,
            email,
            password:hashPassword,
            CNPJ
        }

        //3) Create user with the data provided
        try{
            const service = new ClientService();

            const client = await service.createClient(data);

            return res.status(200).json({
                data:client
            })
        }catch(err){
            console.log(err);
            return res.status(501).json({
                message:'An unexpected error occurred, please reach out to the support'
            })
        }
    }
}