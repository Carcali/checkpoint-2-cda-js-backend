
import "reflect-metadata";

import fs from "node:fs";

import { Column, DataSource, Entity, EntityManager, PrimaryGeneratedColumn } from "typeorm";
import { Country } from "./entities/Country";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { CountryQueries } from "./graphql-resolvers/CountryQueries";
import { CountryMutations } from "./graphql-resolvers/CountryMutations";
import { buildSchema } from "type-graphql";
import { dataSource } from "./datasource";

const port = 4000;

// -------------------------- DATASOURCE 

async function startServerApollo() {

    const schema = await buildSchema({
        resolvers: [CountryQueries, CountryMutations],
    });
    
    const server = new ApolloServer({
        schema
    });

    await dataSource.initialize();

    const { url } = await startStandaloneServer(server, {
        listen: { port },
    });

    console.log(`🚀  Server ready at: ${url}`);
}

startServerApollo();