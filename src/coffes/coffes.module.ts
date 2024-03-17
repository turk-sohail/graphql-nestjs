import { Module } from '@nestjs/common';
import { CoffesResolver } from './coffes.resolver';
import { CoffesService } from './coffes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Coffe, CoffeSchema } from './entities/coffe.schema';

@Module({
  providers: [CoffesResolver, CoffesService],
  imports:[MongooseModule.forFeature([{name:Coffe.name,schema:CoffeSchema}])]
})
export class CoffesModule {}
