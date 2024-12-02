import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Field, ID, Int, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Country extends BaseEntity {

    @PrimaryGeneratedColumn()
    @Field(type => ID)
    id?: number;

    @Column({length: 2 })
    @Field()
    code: string;

    @Column({length: 56 })
    @Field()
    country_name: string;

    @Column({length: 56 })
    @Field()
    emoji: string;

    @Column({nullable: true, length: 2 })
    @Field({ nullable: true })
    continent_code?: string;

    constructor(
        code: string = '',
        country_name: string = '',
        emoji: string = '',
        continent_code: string | undefined = undefined,
    ) {
        super();

        this.code = code;
        this.country_name = country_name;
        this.emoji = emoji;
        this.continent_code = continent_code;
    }
}