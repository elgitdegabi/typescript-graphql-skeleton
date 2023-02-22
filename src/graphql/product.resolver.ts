import { Query, Mutation, Arg, Resolver } from "type-graphql";
import { Product } from "../entity/product";
import { CreateProductInput, UpdateProductInput } from "./input/product.input";

@Resolver()
export class ProductResolver {

    @Mutation(() => Product)
    async create(@Arg("attributes") attributes: CreateProductInput) {
        return await Product.create({
            name: attributes.name,
            description: attributes.description,
            quantity: attributes.quantity
        }).save();
    }

    @Mutation(() => Product)
    async update(@Arg("id") id: number, @Arg("attributes") attributes: UpdateProductInput) {
        const product = await this.product(id);
        return await Product.merge(product!, {
            name: attributes.name,
            description: attributes.description,
            quantity: attributes.quantity
        }).save()
    }

    @Mutation(() => Boolean)
    async delete(@Arg("id") id: number) {
        await Product.delete(id);
        return true;
    }

    @Query(() => [Product])
    products() {
        return Product.find();
    }

    @Query(() => Product)
    product(@Arg("id") id: number) {
        return Product.findOneBy({id});
    }

}
