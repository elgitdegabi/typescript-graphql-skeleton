import "reflect-metadata";
import { startServer } from "./config/server";
import { serverPort } from "./config/constants";
import { dsConnect } from "./config/datasource";

/**
 * 
 */
async function createDBConnection() {
    dsConnect()
        .then(() => {
            console.debug("DB datasource connected");
        })
        .catch((exception) => {
            console.error("DB datasource connection error", exception);
        });
}

/**
 * 
 */
async function createServerConnection() {
    const server = await startServer();
    server.listen(serverPort);

    console.debug("Server started on port", serverPort);
}

createDBConnection();
createServerConnection();
