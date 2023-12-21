import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateItemDto } from './dto/create-item.dto';
import { Item } from './items.entity';

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
  getAll(): Promise<Item[]> {
    return this.itemRepository.find();
  }

  /**
   * update the weight of an item
   */
  async updateWeight(id, weight): Promise<void> {
    const result = await this.itemRepository.update({ id }, { weight });
    console.log('updateWeight', result);
    if (!result) {
      throw new HttpException(
        'Internal Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  // update(updateItem: UpdateItemDto): Promise<Item | null> {
  //   // const { id } = updateItem;
  //   // if (!id) return null;
  //   // const foundIndex = this.items.findIndex((item) => item.id === id);
  //   // if (foundIndex < 0) return null;
  //   // const updatedItem = { ...this.items[foundIndex] };
  //   // for (const key of Object.keys(updatedItem)) {
  //   //   updatedItem[key] = updateItem[key];
  //   // }
  //   // this.items[foundIndex] = updatedItem;
  //   // return updatedItem;
  // }
}
