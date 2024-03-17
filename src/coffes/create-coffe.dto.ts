import { Field, InputType, ObjectType } from "@nestjs/graphql";

@ObjectType()
@InputType({description:"create coffe description"})
export class CreateCoffeInput{
    @Field(()=>String,{description:"new coffe value"})
    name:string
    @Field()
    brand:string
    @Field(()=>[String])
    flavors:string[]
}