import { IsBoolean, IsNotEmpty, IsNumber } from 'class-validator';
// import { weightUnit } from '../items.entity';

export class UpdateItemNameDto {
  @IsNotEmpty()
  name: string;
}

export class UpdateItemWeightDto {
  @IsNumber({ maxDecimalPlaces: 2 })
  weight: number;
}

export class UpdateItemWeightUniteDto {
  // @IsEnum(weightUnit);
  weightUnit: string;
}

export class UpdateItemWornDto {
  @IsBoolean()
  worn: boolean;
}
