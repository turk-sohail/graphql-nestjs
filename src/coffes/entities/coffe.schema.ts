import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { HydratedDocument, Mongoose, SchemaType,Schema as schema } from 'mongoose';

export type CoffeDocument = HydratedDocument<Coffe>;

@ObjectType()
@Schema()
export class Coffe {

  @Field(()=>String)
  _id:schema.Types.ObjectId

  @Field()
  @Prop()
  name: string;

  @Field()
  @Prop()
  brand: string;
  @Field(()=>[String])
  @Prop()
  flavors: string[];
}

export const CoffeSchema = SchemaFactory.createForClass(Coffe);