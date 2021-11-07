import {Request,Response} from 'express';
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
        const {name,email,role,password,CNPJ} = req.body;

        //2) Hash password
        const salt = await genSalt(10);
        const hashPassword = await hash(password,salt);

        var data = {
            name,
            email,
            role,
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
            const service = new ClientService();
            const updatedUser = await service.updateClient(id,data);

            return res.status(201).json({
                data:updatedUser,
                message:'User updated'
            })
            
        }catch(err){
            console.log(err);
            return res.status(501).json({
                message:'An unexpected error occurred, please reach out to the support'
            })
        }

    }
    async updateMe(req:Request,res:Response){
        const uid = req.params.id;
        const {id} = req.user;
        const {name,email,CNPJ} = req.body;        

        if(uid!=id){
            return res.status(403).json({
                message:'Voce não tem autorização para atualizar usuários de terceiros'
            })
        }
        try{
            const service = new ClientService();
            const updateClient = await service.updateClient(id,{name,email,CNPJ});

            return res.status(200).json({
                message:'Conta atualizada!',
                data:updateClient
            })
        }catch(err){
            return res.status(501).json({
                message:'An unexpected error occurred, please reach out to the support'
            })
        }
    }
    async remove(req:Request,res:Response){
        const id = parseInt(req.params.id);
        
        try{
            const service = new ClientService();
            await service.deleteClient(id);

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