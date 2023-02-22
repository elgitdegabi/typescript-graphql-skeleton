import { Product } from "../entity/product";
import { ProductRepository } from "../repository/product.repository";

/**
 * 
 */
export class ProductService {

    /**
     * 
     * @param productRepository 
     */
    constructor (private productRepository: ProductRepository) {}

    /**
     * 
     * @returns 
     */
    public async getProductList(): Promise<Product[]> {
        return this.productRepository.findAll();
    }

    /**
     * 
     * @param id 
     * @returns 
     */
    public async getProductById(id: number): Promise<Product | null> {
        return this.productRepository.findById(id);
    }

    /**
     * 
     * @param name 
     * @param description 
     * @param quantity 
     * @returns 
     */
    public async createProduct(name: string, description: string, quantity: number): Promise<Product> {
        return this.productRepository.add(name, description, quantity);

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
        return this.productRepository.update(id, name, description, quantity);

    }

    /**
     * 
     * @param id 
     * @returns 
     */
    public async deleteProduct(id: number): Promise<Boolean> {
        return this.productRepository.delete(id);
    }
}
