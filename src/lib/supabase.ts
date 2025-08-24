import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ngkrscfufadtafvanwlk.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5na3JzY2Z1ZmFkdGFmdmFud2xrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYwNDc1OTksImV4cCI6MjA3MTYyMzU5OX0.U57hmzudvqU_WCAlG88pWv0ufBleQ2P8HLd7olQe3m0'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type WaitlistEntry = {
  id: string
  email: string
  name?: string
  company?: string
  interest_level: number
  created_at: string
}