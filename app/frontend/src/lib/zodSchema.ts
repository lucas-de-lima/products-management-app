import { z } from "zod";

export const productSchema = z.object({
    name: z.string().min(1, 'O nome do produto é obrigatório'),
    description: z.string().min(1, 'A descrição do produto é obrigatória'),
    price: z.string().min(0, 'O valor do produto deve ser maior ou igual a zero'),
    available: z.boolean(),
  });
  
export type ProductSchema = z.infer<typeof productSchema>;