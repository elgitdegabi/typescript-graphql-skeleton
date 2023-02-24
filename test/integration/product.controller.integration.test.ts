import { DataSource } from "typeorm";
import { ProductController } from "../../src/controller/product.controller";
import { Product } from "../../src/entity/product";
import { ProductRepository } from "../../src/repository/product.repository";
import { ProductService } from "../../src/service/product.service";

/**
 * Integration test for ProductController flow
 */
describe ("product controller integration test", () => {
    let datasource: DataSource;
    let productController: ProductController;

    beforeAll(async () => {
        datasource = new DataSource({
            type: "sqlite",
            database: "memory",
            dropSchema: true,
            logging: false,
            synchronize: true,
            entities: [Product]
        });
        await datasource.initialize(); 
        
        const productRepository = new ProductRepository(datasource.getRepository(Product));
        const productService = new ProductService(productRepository);
        
        productController = new ProductController(productService);   
    });

    afterAll(async () => {
        await datasource.destroy();
    });

    beforeEach(async () => {
        await datasource.getRepository(Product).clear();
    });

    /**
     * Scenario:
     * Should retrieve all product list from product table
     * Expectation:
     * No row are expected since product data were no inserted yet
     */
    it("should get product list", async () => {
        const result = await  productController.getProductList();
        expect(0).toEqual(result.length);    
    });

    /**
     * Scenario:
     * Should retrieve a product when a the product was inserted previously
     * Expectation:
     * A product should be retrieved
     */
    it("should get product by id", async () => {
        const newProduct = await productController.createProduct("someName", "someDescription", 10);
        const result = await productController.getProductById(newProduct.id);
        
        expect(newProduct.name).toEqual(result?.name);    
        expect(newProduct.description).toEqual(result?.description);    
        expect(newProduct.quantity).toEqual(result?.quantity);    
    });

    /**
     * Scenario:
     * Should create some products
     * Expectation:
     * Inserted products should be retrieved
     */
    it("should add new product", async () => {
        await productController.createProduct("someName1", "someDescription1", 10);
        await productController.createProduct("someName2", "someDescription2", 20);

        const result = await productController.getProductList();

        expect(2).toEqual(result.length);    
    });

    /**
     * Scenario:
     * Should update a product
     * Expectation:
     * Updated product should be retrieved
     */
    it("should update a product", async () => {
        const newProduct = await productController.createProduct("someName", "someDescription", 10);
        await productController.updateProduct(newProduct.id, newProduct.name, "otherDescription", newProduct.quantity);

        const result = await productController.getProductById(newProduct.id);
        
        expect(newProduct.name).toEqual(result?.name);    
        expect(newProduct.description).not.toEqual(result?.description);    
        expect(newProduct.quantity).toEqual(result?.quantity);    

    });

    /**
     * Scenario:
     * Should delete a product
     * Expectation:
     * Deleted product should not be retrieved
     */
    it("should delete a product", async () => {
        const newProduct = await productController.createProduct("someName", "someDescription", 10);
        expect(1).toEqual((await productController.getProductList()).length);

        await productController.deleteProduct(newProduct.id);
        expect(0).toEqual((await productController.getProductList()).length);
    });
});
