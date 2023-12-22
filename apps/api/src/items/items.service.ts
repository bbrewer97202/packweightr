import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateItemDto } from './dto/create-item.dto';
import { Item, ItemWeightUnit } from './items.entity';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item)
    private itemRepository: Repository<Item>,
  ) {}

  /**
   * create an item
   */
  async create(newItem: CreateItemDto): Promise<Item> {
    const result = await this.itemRepository.save(newItem);
    if (!result) {
      throw new HttpException(
        'Internal Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    return result;
  }

  /**
   * get a single item
   */
  async getSingle(id: string): Promise<Item> {
    const result = await this.itemRepository.findOne({ where: { id } });
    if (!result) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return result;
  }

  /**
   * get multiple items
   */
  getItems(): Promise<Item[]> {
    return this.itemRepository.find();
  }

  /**
   * update the weight of an item
   */
  async updateWeight(id: string, weight: number): Promise<void> {
    const result = await this.itemRepository.update({ id }, { weight });
    if (!result) {
      throw new HttpException(
        'Internal Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  /**
   * update the name of an item
   */
  async updateName(id: string, name: string): Promise<void> {
    const result = await this.itemRepository.update({ id }, { name });
    if (!result) {
      throw new HttpException(
        'Internal Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  /**
   * update the weight unit of an item
   */
  async updateWeightUnit(id: string, unit: ItemWeightUnit): Promise<void> {
    const result = await this.itemRepository.update(
      { id },
      { weightUnit: unit },
    );
    if (!result) {
      throw new HttpException(
        'Internal Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  /**
   * update the worn weight flag
   */
  async updateWorn(id: string, worn: boolean): Promise<void> {
    const result = await this.itemRepository.update({ id }, { worn });
    if (!result) {
      throw new HttpException(
        'Internal Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
