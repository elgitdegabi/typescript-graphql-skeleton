import { Request, Response } from "express"
import { productService } from "../config/dependency.manager"

/**
 * 
 * @param request 
 * @param response 
 * @returns 
 */
export const getProducts = async (request: Request, response: Response): Promise<Response> => {
    return response.json(await productService.getProductList());
}

/**
 * 
 * @param request 
 * @param response 
 * @returns 
 */
export const getProduct = async (request: Request, response: Response): Promise<Response> => {
    const {id} = request.params;
    return response.json(await productService.getProductById(parseInt(id)));
}

/**
 * 
 * @param request 
 * @param response 
 * @returns 
 */
export const addProduct = async (request: Request, response: Response): Promise<Response> => {
    const {name, description, quantity} = request.body;
    return response.json(await productService.createProduct(name, description, quantity));
}

/**
 * 
 * @param request 
 * @param response 
 * @returns 
 */
export const updateProduct = async (request: Request, response: Response): Promise<Response> => {
    const {id, name, description, quantity} = request.body;
    return response.json(await productService.updateProduct(parseInt(id), name, description, quantity));
}

/**
 * 
 * @param request 
 * @param response 
 * @returns 
 */
export const deleteProduct = async (request: Request, response: Response): Promise<Response> => {
    const {id} = request.params;
    return response.json(await productService.deleteProduct(parseInt(id)));
}
