import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { ItemWeightUnit, weightUnit } from '../items.entity';

/**
 * update name
 */
export class UpdateItemNameDto {
  @ApiProperty({
    description: 'Item identifier',
    example: 'Nemo Fillo pillow',
  })
  @IsString()
  @IsNotEmpty()
  name: string;
}

/**
 * update weight
 */
export class UpdateItemWeightDto {
  @ApiProperty({
    description: 'Weight of the item in grams',
    example: 1.25,
  })
  @IsNumber({ maxDecimalPlaces: 2 })
  weight: number;
}

/**
 * update weight unit
 */
export class UpdateItemWeightUnitDto {
  @ApiProperty({
    description: 'User preferred unit for rendering weight',
    example: 'gram',
    default: 'gram',
  })
  @IsString()
  @IsIn(Object.values(weightUnit))
  weightUnit: ItemWeightUnit;
}

/**
 * update worn weight flag
 */
export class UpdateItemWornDto {
  @ApiProperty({
    description: 'Is the item considered "worn weight"',
    example: false,
  })
  @IsBoolean()
  worn: boolean;
}
