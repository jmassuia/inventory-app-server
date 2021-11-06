import { PrismaClient } from '.prisma/client'

const prisma = new PrismaClient()

interface Supplier {
    name:string
    code:string
    address:string
    phone:string
}

export class SupplierService{
    async addSuppliers(nsup:Supplier){
        const newSupplier = await prisma.suppliers.create({
            data:{
                name:nsup.name,
                code:nsup.code,
                address:nsup.address,
                phone:nsup.phone
            }
        })

        return newSupplier

    }
    async listSuppliers(){
        const listSupp = await prisma.suppliers.findMany()

        return listSupp
    }
}