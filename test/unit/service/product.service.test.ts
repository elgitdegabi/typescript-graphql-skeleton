import { Product } from "../../../src/entity/product";
import { ProductService } from "../../../src/service/product.service";
import { ProductRepository } from "../../../src/repository/product.repository";

jest.mock("../../../src/repository/product.repository");
const productRepository = ProductRepository as jest.MockedClass<typeof ProductRepository>;

/**
 * 
 */
describe ("product service unit test", () => {
    let productService: ProductService;

    beforeEach(() => {
        productRepository.mockReset();
        productService = new ProductService(productRepository.prototype);
    });

    /**
     * Scenario:
     * Expectation:
     */
    it("should get product list", async () => {
        const expectedProducts = new Promise<Product[]>((resolve, reject) => { resolve([new Product()]); });
        productRepository.prototype.findAll.mockReturnValueOnce(expectedProducts);
        
        const result = await productService.getProductList();
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
        productRepository.prototype.findById.mockReturnValueOnce(expectedProduct);
        
        const result = await productService.getProductById(1);
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
        productRepository.prototype.add.mockReturnValueOnce(expectedProduct);
        
        const result = await productService.createProduct("someName", "someDescription", 10);
        expect(1).toEqual(result?.id);
    });

    /**
     * Scenario:
     * Expectation:
     */
    it("should update a product", async () => {
        const expectedOperationResult = new Promise<Boolean>((resolve, reject) => { resolve(true); });
        productRepository.prototype.update.mockReturnValueOnce(expectedOperationResult);
        
        const result = await productService.updateProduct(1, "someName", "someDescription", 10);
        expect(true).toEqual(result);
    });

    /**
     * Scenario:
     * Expectation:
     */
    it("should delete a product", async () => {
        const expectedOperationResult = new Promise<Boolean>((resolve, reject) => { resolve(true); });
        productRepository.prototype.delete.mockReturnValueOnce(expectedOperationResult);
        
        const result = await productService.deleteProduct(1);
        expect(true).toEqual(result);
    });
});
