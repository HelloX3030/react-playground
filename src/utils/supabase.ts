import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qpnqgfwfmmdyhnmbmycb.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFwbnFnZndmbW1keWhubWJteWNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA2ODcyMDYsImV4cCI6MjA2NjI2MzIwNn0.bu4fsXTtXaiL_t1K7nUmhFYSaqn_sf7TBXt0vp4HPYA';
export const supabase = createClient(supabaseUrl, supabaseKey);
