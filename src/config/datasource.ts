import { DataSource } from "typeorm";
import { Product } from "../entity/product";
import * as dbConstants from "./constants";

export const datasource = new DataSource({
    type: "mysql",
    host: getValueFromEnvironment(process.env.TYPEORM_HOST, dbConstants.dbDefaultHost),
    port: parseInt(getValueFromEnvironment(process.env.TYPEORM_PORT, dbConstants.dbDefaultPort)),
    username: getValueFromEnvironment(process.env.TYPEORM_USER, dbConstants.dbDefaultUser),
    password: getValueFromEnvironment(process.env.TYPEORM_PASSWORD, dbConstants.dbDefaultPassword),
    database: getValueFromEnvironment(process.env.TYPEORM_DATABASE, dbConstants.dbDefaultDatabase),
    logging: !!getValueFromEnvironment(process.env.TYPEORM_LOGGING, dbConstants.dbDefaultLogging),
    synchronize: !!getValueFromEnvironment(process.env.TYPEORM_SYNCHRONIZE, dbConstants.dbDefaultSynchronize),
    entities: [Product]
});

export async function dsConnect() {
    await datasource.initialize();
}

function getValueFromEnvironment(value: string | undefined, defaultValue: string): string {
    if (value === undefined) {
        return defaultValue;
    } else {
        return value;
    }
}
