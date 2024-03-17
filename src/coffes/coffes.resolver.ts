import { ParseIntPipe } from '@nestjs/common';
import { Resolver,Query, Args, ID, Mutation } from '@nestjs/graphql';
import { Coffe } from 'src/coffes/entities/coffe.schema';
import { CreateCoffeInput } from './create-coffe.dto';
import { CoffesService } from './coffes.service';
import { Schema as schema } from 'mongoose';
import { UpdateCoffeInput } from './update-coffe-input';

@Resolver()
export class CoffesResolver {
    constructor(private readonly coffeService:CoffesService){}

    @Query(()=>[Coffe],{name:"coffees"})
    async findAll(){
        return this.coffeService.findAll();
    }

    @Query(()=>Coffe,{name:"coffe",nullable:true})
    async findOne(@Args("id",{type:()=>ID})id:schema.Types.ObjectId){
        return this.coffeService.findOne(id)
    }

    @Mutation(()=>Coffe,{name:"createCoffe",nullable:true})
    async createCoffe(@Args("createCoffeInput")createCoffeInput:CreateCoffeInput){
        return this.coffeService.create(createCoffeInput)
    }

    @Mutation(()=>Coffe,{name:"updateCoffe",nullable:true})
    async updateCoffe(
        @Args("updataCoffeInput")updateCoffeInput:UpdateCoffeInput,
        @Args("id",{type:()=>ID})id:schema.Types.ObjectId
        ){
        return this.coffeService.updateCoffe(id,updateCoffeInput)
    }

    @Mutation(()=>Coffe,{name:"deleteCoffe",nullable:true})
    async deleteCoffe(
        @Args("id",{type:()=>ID})id:schema.Types.ObjectId
    ){
        return this.coffeService.deleteCoffe(id)
    }
}
