import { Resolver, Query, Arg } from "type-graphql";
import { Country } from "../entities/Country";
import { dataSource } from "../datasource";

@Resolver(Country)
export class CountryQueries {

    @Query(type => [Country])
    async getAllCountries(): Promise<Country[]> {
        console.log("Récupérer la liste de tous les pays avec leurs attributs")
        const countries: Country[] = await dataSource.manager.find(Country);
        return countries;
    }

    @Query(type => [Country])
    async country(@Arg("code") code: string): Promise<Country[]> {
        console.log("Récupérer les pays en fonction de leur code")
        const countryByCode: Country[] = await dataSource.manager.findOne({ where: { code } });
        return countryByCode;
    }
}