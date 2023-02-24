import "reflect-metadata";
import { ProductResolver } from "../../../../src/graphql/resolver/product.resolver";

/**
 * 
 */
describe ("health check resolver unit test", () => {
    let resolver: ProductResolver;

    beforeEach(() => {
        resolver = new ProductResolver();
    });

    /**
     * Scenario:
     * Expectation:
     */
    it("should resolve ping", () => {
        expect("Pong!").toEqual(resolver.ping());
    });
});
