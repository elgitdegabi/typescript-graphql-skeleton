import "reflect-metadata";
import { Product } from "../../../../src/entity/product";
import { CreateProductInput, UpdateProductInput } from "../../../../src/graphql/input/product.input";
import { ProductResolver } from "../../../../src/graphql/resolver/product.resolver";

jest.mock("../../../../src/entity/product");
const product = Product as jest.MockedClass<typeof Product>;

/**
 * 
 */
describe ("health check resolver unit test", () => {
    let resolver: ProductResolver;

    beforeEach(() => {
        product.mockReset();        
        resolver = new ProductResolver();
    });

    /**
     * Scenario:
     * Expectation:
     */
    it("should resolve create", () => {
        const expectedProduct = new Product();
        Product.create = jest.fn().mockReturnValueOnce(Product); //mocking static methods
        Product.save = jest.fn().mockReturnValueOnce(expectedProduct); //mocking static methods

        resolver.create(new CreateProductInput());

        expect(Product.create).toBeCalledTimes(1);
        expect(Product.save).toBeCalledTimes(1);
    });

    /**
     * Scenario:
     * Expectation:
     */
    it("should resolve update", () => {
        const expectedProduct = new Product();
        expectedProduct.id = 1;
        expectedProduct.name = "current name";
        const expectedPromise = new Promise<Product>((resolve, reject) => { resolve(expectedProduct); });

        Product.findOneBy = jest.fn().mockReturnValueOnce(expectedPromise); //mocking static methods
        Product.merge = jest.fn().mockReturnValueOnce(Product); //mocking static methods
        Product.save = jest.fn().mockReturnValueOnce(expectedProduct); //mocking static methods

        const updateProductInput = new UpdateProductInput();
        updateProductInput.name = "other name";

        resolver.update(1, updateProductInput);

        expect(Product.findOneBy).toBeCalledTimes(1);
        //expect(Product.merge).toBeCalledTimes(1);
        //expect(Product.save).toBeCalledTimes(1);
    });

    /**
     * Scenario:
     * Expectation:
     */
    it("should resolve delete", () => {
        Product.delete = jest.fn().mockReturnValueOnce(undefined); //mocking static methods

        resolver.delete(1);

        expect(Product.delete).toBeCalledTimes(1);
    });

    /**
     * Scenario:
     * Expectation:
     */
        it("should resolve products", () => {
            const expectedProducts = [new Product()];
            const expectedPromise = new Promise<Product[]>((resolve, reject) => { resolve(expectedProducts); });            
            Product.find = jest.fn().mockReturnValueOnce(expectedPromise); //mocking static methods
    
            resolver.products();
    
            expect(Product.find).toBeCalledTimes(1);
        });

    /**
     * Scenario:
     * Expectation:
     */
    it("should resolve product", () => {
        const expectedProduct = new Product();
        const expectedPromise = new Promise<Product>((resolve, reject) => { resolve(expectedProduct); });        
        Product.findOneBy = jest.fn().mockReturnValueOnce(expectedPromise); //mocking static methods

        resolver.product(1);

        expect(Product.findOneBy).toBeCalledTimes(1);
    });
});
