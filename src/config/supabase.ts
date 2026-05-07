import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

// Log para debuguear (borralo después)
console.log("Conectando a:", supabaseUrl);

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Faltan las credenciales de Supabase en el .env");
}

export const supabase = createClient(supabaseUrl, supabaseKey);
