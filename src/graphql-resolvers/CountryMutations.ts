import { Resolver, Mutation, Arg } from "type-graphql";
import { Country } from "../entities/Country";

@Resolver(Country)
export class CountryMutations {

    @Mutation(() => Country)
    async addCountry(
        @Arg("code") code: string,
        @Arg("country_name") country_name: string,
        @Arg("emoji") emoji: string,
        @Arg("continent_code") continent_code: string
    ): Promise<Country> {
        const country = new Country();
        country.code = code;
        country.country_name = country_name;
        country.emoji = emoji;
        country.continent_code = continent_code;

        return await country.save();
    }
}