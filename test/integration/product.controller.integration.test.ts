import { DataSource } from "typeorm";
import { ProductController } from "../../src/controller/product.controller";
import { Product } from "../../src/entity/product";
import { ProductRepository } from "../../src/repository/product.repository";
import { ProductService } from "../../src/service/product.service";

/**
 * 
 */
describe ("product controller integration test", () => {
    let datasource: DataSource;
    let productController: ProductController;

    beforeAll(async () => {
        datasource = new DataSource({
            type: "sqlite",
            database: "memory",
            dropSchema: true,
            logging: true,
            synchronize: true,
            entities: [Product]
        });
        await datasource.initialize(); 
        
        const productRepository = new ProductRepository(datasource.getRepository(Product));
        const productService = new ProductService(productRepository);
        
        productController = new ProductController(productService);   
    });

    beforeEach(async () => {
        datasource.getRepository(Product).clear;
    });

    /**
     * Scenario:
     * Expectation:
     */
    it("should get product list", () => {
        productController.getProductList().then((result) => {
            expect(0).toEqual(result.length);    
        });
    });

    /**
     * Scenario:
     * Expectation:
     */
    it("should get product by id", () => {
        expect(true).toEqual(true); // dummy expectation as template definition
    });

    /**
     * Scenario:
     * Expectation:
     */
    it("should add new product", () => {
        expect(true).toEqual(true); // dummy expectation as template definition
    });

    /**
     * Scenario:
     * Expectation:
     */
    it("should update a product", () => {
        expect(true).toEqual(true); // dummy expectation as template definition
    });

    /**
     * Scenario:
     * Expectation:
     */
    it("should delete a product", () => {
        expect(true).toEqual(true); // dummy expectation as template definition
    });

    afterAll(async () => {
        await datasource.destroy();
    });
    
});
