import { Query, Resolver } from "type-graphql";

/**
 * 
 */
@Resolver()
export class HealthCheckResolver {
    @Query(() => String)
    ping() {
        return "Pong!";
    }
}
