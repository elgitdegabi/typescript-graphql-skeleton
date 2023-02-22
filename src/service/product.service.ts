import { Product } from "../entity/product";
import { datasource } from "../config/datasource";

export async function getProductList(): Promise<Product[]> {
    return await datasource.getRepository(Product).find();
}

export async function getProductById(id: number): Promise<Product[]> {
    return await datasource.getRepository(Product).findBy({id: id});
}

export async function addNewProduct(name: string, description: string, quantity: number): Promise<Product> {
    return await datasource.getRepository(Product).save({
        name: name,
        description: description,
        quantity: quantity
    });
}

export async function updateProductById(id: number, name?: string, description?: string, quantity?: number): Promise<Boolean> {
    const result = await datasource.getRepository(Product).update(id, {
        name: name,
        description: description,
        quantity: quantity
    });
    return result.affected == 1;
}

export async function deleteProductById(id: number): Promise<Boolean> {
    const result = await datasource.getRepository(Product).delete({id: id});
    return result.affected == 1;
}
