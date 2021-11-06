import { PrismaClient } from ".prisma/client";

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
            select:{
                name:true,
                email:true,
            }
        });

        return clients;
    }
    async createClient(user:Client){

        const client  = await prisma.client.create({
            data:user
        });

        return client
    }
}