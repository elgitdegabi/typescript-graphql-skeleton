import { Request, Response } from "express";
import { productService } from "../config/dependency.manager";
import { Product } from "../entity/product";
import { ProductService } from "../service/product.service";
/**
 * 
 */
export class ProductController {
    constructor (private productService: ProductService) {}

    /**
     * 
     * @returns 
     */
    public async getProductList(): Promise<Product[]> {
        return this.productService.getProductList();
    }

    /**
     * 
     * @param id 
     * @returns 
     */
    public async getProductById(id: number): Promise<Product | null> {
        return this.productService.getProductById(id);
    }

        /**
     * 
     * @param name 
     * @param description 
     * @param quantity 
     * @returns 
     */
    public async createProduct(name: string, description: string, quantity: number): Promise<Product> {
        return this.productService.createProduct(name, description, quantity);

    }
    
    /**
     * 
     * @param id 
     * @param name 
     * @param description 
     * @param quantity 
     * @returns 
     */
    public async updateProduct(id: number, name: string, description: string, quantity: number): Promise<Boolean> {
        return this.productService.updateProduct(id, name, description, quantity);

    }

    /**
     * 
     * @param id 
     * @returns 
     */
    public async deleteProduct(id: number): Promise<Boolean> {
        return this.productService.deleteProduct(id);
    }
}

/**
 * 
 */
const productController = new ProductController(productService);

/**
 * 
 * @param request 
 * @param response 
 * @returns 
 */
export const getProducts = async (request: Request, response: Response): Promise<Response> => {
    return response.json(await productController.getProductList());
}

/**
 * 
 * @param request 
 * @param response 
 * @returns 
 */
export const getProduct = async (request: Request, response: Response): Promise<Response> => {
    const {id} = request.params;
    return response.json(await productController.getProductById(parseInt(id)));
}

/**
 * 
 * @param request 
 * @param response 
 * @returns 
 */
export const addProduct = async (request: Request, response: Response): Promise<Response> => {
    const {name, description, quantity} = request.body;
    return response.json(await productController.createProduct(name, description, quantity));
}

/**
 * 
 * @param request 
 * @param response 
 * @returns 
 */
export const updateProduct = async (request: Request, response: Response): Promise<Response> => {
    const {id, name, description, quantity} = request.body;
    return response.json(await productController.updateProduct(parseInt(id), name, description, quantity));
}

/**
 * 
 * @param request 
 * @param response 
 * @returns 
 */
export const deleteProduct = async (request: Request, response: Response): Promise<Response> => {
    const {id} = request.params;
    return response.json(await productController.deleteProduct(parseInt(id)));
}
