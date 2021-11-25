import { PrismaClient } from '.prisma/client'

const prisma = new PrismaClient()

interface Stock {
    name: string
    cep: string
    clientId: number
}

export class StockServices{
    async listAllStock(){
        // List all the suppliers available
        const listSupp = await prisma.stock.findMany()
        
        //Return the suppliers
        return listSupp
    }
    async listStock(clientId){
        // List all the suppliers available
        const listSupp = await prisma.stock.findMany({
            where:{
                clientId
            }
        })

        //Return the suppliers
        return listSupp
    }
    async addStock(data:Stock){
        const newSupplier = await prisma.stock.create({
            data
        })

        return newSupplier

    }
    async updateStock(id,data){
        const supplier = await prisma.stock.update({
            where:{
                id
            },
            data
        });

        return supplier;
    }
    async deleteStock(id){

        await prisma.stock.delete({
            where:{
                id
            }
        });

        return;
    }
}