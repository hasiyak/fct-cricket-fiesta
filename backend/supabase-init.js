import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';


const supabaseUrl = 'https://crkatqyezdttzucniyle.supabase.co';
const supabaseAnonKey = 'sb_publishable_NFREqDO6ZiutS_e_1rKsFQ_PsYzYzXV';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
