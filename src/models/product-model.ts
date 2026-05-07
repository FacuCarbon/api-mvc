import { supabase } from "../config/supabase.js";

export interface Product {
  id?: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: {
    rate: number;
    count: number;
  };
  created_at?: string;
}

export const ProductModel = {
  async getAll(limit?: number, category?: string) {
    let query = supabase.from("products").select("*");

    if (category) {
      query = query.ilike("category", `%${category.toLowerCase()}%`);
    }
    if (limit) {
      query = query.limit(limit);
    }
    return await query;
  },

  async getById(id: string) {
    return await supabase.from("products").select("*").eq("id", id);
  },

  async create(newProduct: Product) {
    return await supabase.from("products").insert([newProduct]).select();
  },

  async update(id: string, updates: Partial<Product>) {
    return await supabase
      .from("products")
      .update(updates)
      .eq("id", id)
      .select();
  },

  async delete(id: string) {
    return await supabase.from("products").delete().eq("id", id);
  },
};
