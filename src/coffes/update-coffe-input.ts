import { InputType, ObjectType, PartialType, Field, } from "@nestjs/graphql";
import { CreateCoffeInput } from "./create-coffe.dto";

@ObjectType()
@InputType()
export class UpdateCoffeInput extends PartialType(CreateCoffeInput) {
    @Field(() => String, { description: "new coffe value", nullable: true })
    name?: string
    @Field({ nullable: true })
    brand?: string
    @Field(() => [String], { nullable: true })
    flavors?: string[]
}