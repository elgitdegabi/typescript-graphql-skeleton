import { Product } from "../../../src/entity/product";

/**
 * 
 */
describe ("product entity unit test", () => {
    let product: Product;

    beforeEach(() => {
        product = new Product();
    });

    /**
     * Scenario:
     * Expectation:
     */
    it("should get & set id", () => {
        expect(undefined).toEqual(product.id);
        product.id = 1;
        expect(1).toEqual(product.id);
    });

    /**
     * Scenario:
     * Expectation:
     */
    it("should get & set name", () => {
        expect(undefined).toEqual(product.name);
        product.name = "some value";
        expect("some value").toEqual(product.name);
    });

    /**
     * Scenario:
     * Expectation:
     */
    it("should get & set description", () => {
        expect(undefined).toEqual(product.description);
        product.description = "some value";
        expect("some value").toEqual(product.description);
    });

    /**
     * Scenario:
     * Expectation:
     */
    it("should get & set quantity", () => {
        expect(undefined).toEqual(product.quantity);
        product.quantity = 1;
        expect(1).toEqual(product.quantity);
    });

    /**
     * Scenario:
     * Expectation:
     */
        it("should get & set createTS", () => {
            expect(undefined).toEqual(product.createTS);
            product.createTS = "some value";
            expect("some value").toEqual(product.createTS);
        });
    
    /**
     * Scenario:
     * Expectation:
     */
        it("should get & set updateTS", () => {
            expect(undefined).toEqual(product.updateTS);
            product.updateTS = "some value";
            expect("some value").toEqual(product.updateTS);
        });    
});
