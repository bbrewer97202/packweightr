import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { ItemWeightUnit, weightUnit } from '../items.entity';

export class CreateItemDto {
  /**
   * name
   */
  @ApiProperty({
    description: 'Item identifier',
    example: 'Nemo Fillo pillow',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  /**
   * weight
   */
  @ApiProperty({
    description: 'Weight of the item in grams',
    example: 1.25,
  })
  @IsNumber({ maxDecimalPlaces: 2 })
  weight: number;

  /**
   * weight unit
   */
  @ApiProperty({
    description: 'User preferred unit for rendering weight',
    example: 'gram',
    default: 'gram',
  })
  @IsString()
  @IsIn(Object.values(weightUnit))
  weightUnit: ItemWeightUnit;

  /**
   * worn weight flag
   */
  @ApiProperty({
    description: 'Is the item considered "worn weight"',
    example: false,
  })
  @IsBoolean()
  worn: boolean;
}
