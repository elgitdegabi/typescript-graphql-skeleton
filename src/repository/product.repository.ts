import { Product } from "../entity/product";
import { Repository } from "typeorm";

/**
 * 
 */
export class ProductRepository {

    /**
     * 
     * @param productRepository 
     */
    constructor (private repository: Repository<Product>) {}

    /**
     * 
     * @returns 
     */
    public async findAll(): Promise<Product[]> {
        return await this.repository.find();
    }

    /**
     * 
     * @param id 
     * @returns 
     */
    public async findById(id: number): Promise<Product | null> {
        return await this.repository.findOneBy({id: id});
    }

    /**
     * 
     * @param name 
     * @param description 
     * @param quantity 
     * @returns 
     */
    public async add(name: string, description: string, quantity: number): Promise<Product> {
        return await this.repository.save({
            name: name,
            description: description,
            quantity: quantity
        });
    }
    
    /**
     * 
     * @param id 
     * @param name 
     * @param description 
     * @param quantity 
     * @returns 
     */
    public async update(id: number, name?: string, description?: string, quantity?: number): Promise<Boolean> {
        const result = await this.repository.update(id, {
            name: name,
            description: description,
            quantity: quantity
        });
        return result.affected == 1;
    }

    /**
     * 
     * @param id 
     * @returns 
     */
    public async delete(id: number): Promise<Boolean> {
        const result = await this.repository.delete({id: id});
        return result.affected == 1;    
    }
}
