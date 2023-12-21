import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  // UsePipes,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
// import { ZodValidationPipe } from 'src/zod.validation.pipe';
// import { CreateItemSchema } from './items.schema';
import { UpdateItemWeightDto } from './dto/update-item.dto';

@Controller('items')
export class ItemsController {
  constructor(private itemsService: ItemsService) {}

  @Get()
  getAll() {
    return this.itemsService.getAll();
  }

  @Get('/:id')
  get(@Param('id', ParseUUIDPipe) id: string) {
    return this.itemsService.getSingle(id);
  }

  // @UsePipes(new ZodValidationPipe(CreateItemSchema))
  @Post()
  async create(@Body() createItemDto: CreateItemDto) {
    return this.itemsService.create(createItemDto);
  }

  @Patch('/:id')
  async updateWeight(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() update: UpdateItemWeightDto,
  ) {
    return this.itemsService.updateWeight(id, update?.weight);
  }
}
