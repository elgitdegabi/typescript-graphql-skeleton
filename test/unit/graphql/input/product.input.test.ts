import "reflect-metadata";
import { CreateProductInput, UpdateProductInput } from "../../../../src/graphql/input/product.input";


/**
 * 
 */
describe ("product entity unit test", () => {

    /**
     * Scenario:
     * Expectation:
     */
    it("should get & set create product input", () => {
        const createProductInput = new CreateProductInput;

        expect(undefined).toEqual(createProductInput.name);
        expect(undefined).toEqual(createProductInput.description);
        expect(undefined).toEqual(createProductInput.quantity);

        createProductInput.name = "someName";
        createProductInput.description = "someDescription";
        createProductInput.quantity = 10;

        expect(undefined).not.toEqual(createProductInput.name);
        expect(undefined).not.toEqual(createProductInput.description);
        expect(undefined).not.toEqual(createProductInput.quantity);
    });

    /**
     * Scenario:
     * Expectation:
     */
    it("should get & set update product input", () => {
        const updateProductInput = new UpdateProductInput;

        expect(undefined).toEqual(updateProductInput.name);
        expect(undefined).toEqual(updateProductInput.description);
        expect(undefined).toEqual(updateProductInput.quantity);

        updateProductInput.name = "someName";
        updateProductInput.description = "someDescription";
        updateProductInput.quantity = 10;

        expect(undefined).not.toEqual(updateProductInput.name);
        expect(undefined).not.toEqual(updateProductInput.description);
        expect(undefined).not.toEqual(updateProductInput.quantity);
    });
});
