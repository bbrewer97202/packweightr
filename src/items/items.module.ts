import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './items.entity';

@Module({
  controllers: [ItemsController],
  providers: [ItemsService],
  imports: [TypeOrmModule.forFeature([Item])],
})
export class ItemsModule {}
