import express from "express";
import productRoutes from "./routes";

import { ApolloServer } from "apollo-server-express";
import { HealthCheckResolver } from "../graphql/health.check.resolver";
import { ProductResolver } from "../graphql/product.resolver";
import { buildSchema } from "type-graphql/dist/utils";

export async function startServer() {
    const expressServer = express();
    expressServer.use(express.json());
    expressServer.use("/api", productRoutes);

    const apolloServer = new ApolloServer({
        context: ({req, res}) => ({req, res}), 
        schema: await buildSchema({
            resolvers: [HealthCheckResolver, ProductResolver],
            validate: { forbidUnknownValues: false } // just for version 0.14 validation-class issues
        })
    });
    
    await apolloServer.start();
    apolloServer.applyMiddleware({app: expressServer, path: '/graphql'});

    return expressServer;
}
