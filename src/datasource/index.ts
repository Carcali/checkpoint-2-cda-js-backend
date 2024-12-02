import { DataSource } from "typeorm";
import { Country } from "../entities/Country";

export const dataSource = new DataSource({
    type: 'sqlite',
    database: './db/checkpoint-2.sqlite',
    entities: ['src/entities/*.ts'],
    synchronize: true,
    logging: "all"
});