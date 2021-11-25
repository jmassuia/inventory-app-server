import { PrismaClient } from '.prisma/client'

const prisma = new PrismaClient()

interface Product {
    name:string
    desc:string
    price:number
    quantity:number    
    clientId:number
    stockId:number
}

export class ProductService{
    async listproducts(){
        // List all the products available
        const products = await prisma.product.findMany()

        //Return the product
        return products
    }
    async listProductsByStock(id){
        // List all the products available
        const product = await prisma.product.findMany({
            where:{
                stockId:id
            }
        })

        //Return the product
        return product
    }
    async addProduct(data:Product){
        const newProduct = await prisma.product.create({
            data
        })

        return newProduct

    }
    async updateProduct(id,data){
        const product = await prisma.product.update({
            where:{
                id
            },
            data
        });

        return product;
    }
    async deleteProduct(id){

        await prisma.product.delete({
            where:{
                id
            }
        });

        return;
    }
}