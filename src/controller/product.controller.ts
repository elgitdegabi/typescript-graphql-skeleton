import { Request, Response } from "express"
import { getProductList, getProductById, addNewProduct, updateProductById, deleteProductById } from "../service/product.service"

export const getProducts = async (request: Request, response: Response): Promise<Response> => {
    return response.json(await getProductList());    
}

export const getProduct = async (request: Request, response: Response): Promise<Response> => {
    const {id} = request.params;
    return response.json(await getProductById(parseInt(id)));    
}

export const addProduct = async (request: Request, response: Response): Promise<Response> => {
    const {name, description, quantity} = request.body;
    return response.json(await addNewProduct(name, description, quantity));    
}

export const updateProduct = async (request: Request, response: Response): Promise<Response> => {
    const {id, name, description, quantity} = request.body;
    return response.json(await updateProductById(id, name, description, quantity));    
}

export const deleteProduct = async (request: Request, response: Response): Promise<Response> => {
    const {id} = request.body;
    return response.json(await deleteProductById(parseInt(id)));    
}
