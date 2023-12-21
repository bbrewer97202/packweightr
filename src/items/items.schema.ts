import { z } from 'zod';

export const ItemIdSchema = z.string().uuid();

export const ItemNameSchema = z
  .string()
  .min(1, { message: 'Name must be at least 1 character' })
  .max(100, { message: 'Name must not exceed 100 characters' });

export const ItemWeightSchema = z.number();

export const ItemWornSchema = z.boolean();

export const ItemSchema = z.object({
  id: ItemIdSchema,
  name: ItemNameSchema,
  weight: ItemWeightSchema,
  worn: ItemWornSchema,
});

export type Item = z.infer<typeof ItemSchema>;

export const CreateItemSchema = ItemSchema.omit({ id: true });

export const UpdateItemSchema = ItemSchema.omit({ id: true });
