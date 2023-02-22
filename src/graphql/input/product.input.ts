import {InputType, Field, Int} from "type-graphql"

/**
 * 
 */
@InputType()
export class CreateProductInput {
    @Field(() => String)
    name!: string

    @Field(() => String)
    description!: string

    @Field(() => Int)
    quantity!: number
}

/**
 * 
 */
@InputType()
export class UpdateProductInput {
    @Field(() => String, {nullable: true})
    name?: string

    @Field(() => String, {nullable: true})
    description?: string

    @Field(() => Int, {nullable: true})
    quantity?: number
}
