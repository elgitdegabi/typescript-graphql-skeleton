import { ProductController } from "../../../src/controller/product.controller";
import { Product } from "../../../src/entity/product";
import { ProductService } from "../../../src/service/product.service";

jest.mock("../../../src/service/product.service");
const productService = ProductService as jest.MockedClass<typeof ProductService>;

/**
 * 
 */
describe ("product controler unit test", () => {
    let productController: ProductController;

    beforeEach(() => {
        productService.mockReset();
        productController = new ProductController(productService.prototype);
    });

    /**
     * Scenario:
     * Expectation:
     */
    it("should get product list", async () => {
        const expectedProducts = new Promise<Product[]>((resolve, reject) => { resolve([new Product()]); });
        productService.prototype.getProductList.mockReturnValueOnce(expectedProducts);
        
        const result = await productController.getProductList();
        expect(1).toEqual(result.length);
    });

    /**
     * Scenario:
     * Expectation:
     */
    it("should get product by id", async () => {
        const expectedProduct = new Promise<Product>((resolve, reject) => { 
            const product = new Product();
            product.id = 1;
            resolve(product); 
        });
        productService.prototype.getProductById.mockReturnValueOnce(expectedProduct);
        
        const result = await productController.getProductById(1);
        expect(1).toEqual(result?.id);
    });

    /**
     * Scenario:
     * Expectation:
     */
    it("should create new product", async () => {
        const expectedProduct = new Promise<Product>((resolve, reject) => { 
            const product = new Product();
            product.id = 1;
            resolve(product); 
        });
        productService.prototype.createProduct.mockReturnValueOnce(expectedProduct);
        
        const result = await productController.createProduct("someName", "someDescription", 10);
        expect(1).toEqual(result?.id);
    });

    /**
     * Scenario:
     * Expectation:
     */
    it("should update a product", async () => {
        const expectedOperationResult = new Promise<Boolean>((resolve, reject) => { resolve(true); });
        productService.prototype.updateProduct.mockReturnValueOnce(expectedOperationResult);
        
        const result = await productController.updateProduct(1, "someName", "someDescription", 10);
        expect(true).toEqual(result);
    });

    /**
     * Scenario:
     * Expectation:
     */
    it("should delete a product", async () => {
        const expectedOperationResult = new Promise<Boolean>((resolve, reject) => { resolve(true); });
        productService.prototype.deleteProduct.mockReturnValueOnce(expectedOperationResult);
        
        const result = await productController.deleteProduct(1);
        expect(true).toEqual(result);
    });
});
