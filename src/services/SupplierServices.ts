import { PrismaClient } from '.prisma/client'

const prisma = new PrismaClient()

interface Supplier {
    name:string
    address:string
    phone:string
    city:string
    cnpj:string
    state:string
    client:object
}

export class SupplierService{
    async addSuppliers(nsup:Supplier){
        const newSupplier = await prisma.suppliers.create({
            data:{
                name:nsup.name,
                address:nsup.address,
                phone:nsup.phone,
                city:nsup.city,
                cnpj:nsup.cnpj,
                state:nsup.state,
                client:nsup.client
            }
        })

        return newSupplier

    }
    async listSuppliers(){
        const listSupp = await prisma.suppliers.findMany()

        return listSupp
    }
}