import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.EXPO_PUBLIC_SUPABASE_KEY;

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

console.log('URL:', SUPABASE_URL)
console.log('KEY:', SUPABASE_KEY)