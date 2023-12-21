import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export const weightUnit = {
  GRAM: 'gram',
  KILOGRAM: 'kilogram',
  OUNCE: 'ounce',
  POUND: 'pound',
} as const;

export type ItemUnit = (typeof weightUnit)[keyof typeof weightUnit];

@Entity({ name: 'item' })
export class Item {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'decimal', default: 0.0, precision: 5, scale: 2 })
  weight: number;

  @Column({
    type: 'enum',
    enum: Object.values(weightUnit),
    default: weightUnit.GRAM,
  })
  weightUnit: string;

  @Column({ default: false })
  worn: boolean;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;
}
