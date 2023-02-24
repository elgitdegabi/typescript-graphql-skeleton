import "reflect-metadata";
import { HealthCheckResolver } from "../../../../src/graphql/resolver/health.check.resolver";

/**
 * 
 */
describe ("health check resolver unit test", () => {
    let resolver: HealthCheckResolver;

    beforeEach(() => {
        resolver = new HealthCheckResolver();
    });

    /**
     * Scenario:
     * Expectation:
     */
    it("should resolve ping", () => {
        expect("Pong!").toEqual(resolver.ping());
    });
});
