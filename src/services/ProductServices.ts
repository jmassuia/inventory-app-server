import { PrismaClient } from '.prisma/client'

const prisma = new PrismaClient()

interface Product {
    name:String
    desc:String
    price:number
    quantity:number    
    clientId:number
    stockId:number
}

export class ProductService{
    async listproducts(){
        // List all the products available
        const listProducts = await prisma.product.findMany()

        //Return the product
        return listProducts
    }
    async addProduct(product:Product){
        const newProduct = await prisma.product.create({
            data:{
                name:product.name,
                desc:product.desc,
                price:product.price,
                quantity:product.quantity,
                clientId:product.clientId,
                stockId:product.stockId              
            }
        })

        return newProduct

    }
    async updateProduct(id,data){
        const Product = await prisma.product.update({
            where:{
                id
            },
            data
        });

        return Product;
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