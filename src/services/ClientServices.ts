import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface Client{
    name: string
    email: string  
    password: string
    CNPJ: string
}   


export class ClientService{
    async listClients(){
        const clients = await prisma.client.findMany({
            where:{
                active:true
            },
            select:{
                name:true,
                email:true,
                role:true,              
            }
        });

        return clients;
    }
    async createClient(user:Client){

        const client  = await prisma.client.create({
            data:user
        });

        return client;
    }
    async updateClient(id,data){
        const client = await prisma.client.update({
            where:{
                id
            },
            data
        });

        return client;
    }
    async deleteClient(id){

        await prisma.client.update({
            where:{
                id
            },
            data:{
                active:false,
            }
        });

        return;
    }
}