import { Injectable } from '@nestjs/common';
import { CreateCoffeInput } from './create-coffe.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Coffe,CoffeDocument } from 'src/coffes/entities/coffe.schema';
import { Model,Schema as schema } from 'mongoose';
import { UpdateCoffeInput } from './update-coffe-input';

@Injectable()
export class CoffesService {
    constructor(@InjectModel(Coffe.name) private coffeModel:Model<CoffeDocument>){}

    async findAll(){
        const coffes = await this.coffeModel.find();
        return coffes;
    }

    async findOne(id:schema.Types.ObjectId){
        const coffe = await this.coffeModel.findById(id)
        return coffe
    }

    async create(createCoffe:CreateCoffeInput){
        const coffe = new this.coffeModel(createCoffe);
        await coffe.save();
        return coffe;
    }

    async updateCoffe(id:schema.Types.ObjectId,updataeCoffeInput:UpdateCoffeInput){
        const coffe = await this.coffeModel.findByIdAndUpdate(id,updataeCoffeInput,{new:true})
        return coffe
    }

    async deleteCoffe(id:schema.Types.ObjectId){
        const coffe = await this.coffeModel.findByIdAndDelete(id);
        return coffe;
    }


}
