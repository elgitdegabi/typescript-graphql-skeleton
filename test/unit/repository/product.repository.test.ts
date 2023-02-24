import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { Product } from "../../../src/entity/product";
import { ProductRepository } from "../../../src/repository/product.repository";

jest.mock("../../../node_modules/typeorm/repository/Repository");
const typeOrmRepository = Repository as jest.MockedClass<typeof Repository>;

/**
 * 
 */
describe ("product service unit test", () => {
    let productRepository: ProductRepository;

    beforeEach(() => {
        typeOrmRepository.mockReset();
        productRepository = new ProductRepository(typeOrmRepository.prototype);
    });

    /**
     * Scenario:
     * Expectation:
     */
    it("should get product list", async () => {
        const expectedProducts = new Promise<Product[]>((resolve, reject) => { resolve([new Product()]); });
        typeOrmRepository.prototype.find.mockReturnValueOnce(expectedProducts);
        
        const result = await productRepository.findAll();
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
        typeOrmRepository.prototype.findOneBy.mockReturnValueOnce(expectedProduct);
        
        const result = await productRepository.findById(1);
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
        typeOrmRepository.prototype.save.mockReturnValueOnce(expectedProduct);
        
        const result = await productRepository.add("someName", "someDescription", 10);
        expect(1).toEqual(result?.id);
    });

    /**
     * Scenario:
     * Expectation:
     */
    it("should update a product", async () => {
        const expectedOperationResult = new Promise<UpdateResult>((resolve, reject) => {
            const updateResult = new UpdateResult();
            updateResult.affected = 1; 
            resolve(updateResult); 
        });
        typeOrmRepository.prototype.update.mockReturnValueOnce(expectedOperationResult);
        
        const result = await productRepository.update(1, "someName", "someDescription", 10);
        expect(true).toEqual(result);
    });

    /**
     * Scenario:
     * Expectation:
     */
    it("should delete a product", async () => {
        const expectedOperationResult = new Promise<DeleteResult>((resolve, reject) => { 
            const deleteResult = new DeleteResult();
            deleteResult.affected = 1;
            resolve(deleteResult); 
        });
        typeOrmRepository.prototype.delete.mockReturnValueOnce(expectedOperationResult);
        
        const result = await productRepository.delete(1);
        expect(true).toEqual(result);
    });
});
