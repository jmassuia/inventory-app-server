import { PrismaClient } from '.prisma/client'

const prisma = new PrismaClient()

interface Supplier {
    name: string
    address: string
    phone: string
    city: string
    cnpj: string
    uf: string
    clientId: number
}

export class SupplierService{
    async listSuppliers(){
        // List all the suppliers available
        const listSupp = await prisma.suppliers.findMany()

        //Return the suppliers
        return listSupp
    }
    async addSupplier(supplier:Supplier){
        const newSupplier = await prisma.suppliers.create({
            data:{
                name:supplier.name,
                address:supplier.address,
                phone:supplier.phone,
                city:supplier.city,
                cnpj:supplier.cnpj,
                uf:supplier.uf,
                clientId:supplier.clientId
            }
        })

        return newSupplier

    }
    async updateSupplier(id,data){
        const supplier = await prisma.suppliers.update({
            where:{
                id
            },
            data
        });

        return supplier;
    }
    async deleteSupplier(id){

        await prisma.suppliers.delete({
            where:{
                id
            }
        });

        return;
    }
}