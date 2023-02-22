import { datasource } from "../config/datasource";
import { Product } from "../entity/product";
import { ProductRepository } from "../repository/product.repository";
import { ProductService } from "../service/product.service";

/**
 * 
 */
export const productRepository = new ProductRepository(datasource.getRepository(Product));

/**
 * 
 */
export const productService = new ProductService(productRepository);
