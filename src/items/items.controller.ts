import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import {
  UpdateItemNameDto,
  UpdateItemWeightDto,
  UpdateItemWeightUnitDto,
  UpdateItemWornDto,
} from './dto/update-item.dto';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private itemsService: ItemsService) {}

  /**
   * get multiple items
   */
  @Get()
  getItems() {
    return this.itemsService.getItems();
  }

  /**
   * get one item
   */
  @Get('/:id')
  get(@Param('id', ParseUUIDPipe) id: string) {
    return this.itemsService.getSingle(id);
  }

  /**
   * create an item
   */
  @Post()
  async create(@Body() createItemDto: CreateItemDto) {
    return this.itemsService.create(createItemDto);
  }

  /**
   * update item weight
   */
  @Patch('/:id/weight')
  async updateWeight(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() update: UpdateItemWeightDto,
  ) {
    return this.itemsService.updateWeight(id, update?.weight);
  }

  /**
   * update item name
   */
  @Patch('/:id/name')
  async updateName(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() update: UpdateItemNameDto,
  ) {
    return this.itemsService.updateName(id, update?.name);
  }

  /**
   * update item weight unit
   */
  @Patch('/:id/unit')
  async updateWeightUnit(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() update: UpdateItemWeightUnitDto,
  ) {
    return this.itemsService.updateWeightUnit(id, update?.weightUnit);
  }

  /**
   * update item worn weight flag
   */
  @Patch('/:id/worn')
  async updateWorn(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() update: UpdateItemWornDto,
  ) {
    return this.itemsService.updateWorn(id, update?.worn);
  }
}
