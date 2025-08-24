-- Create waitlist_entries table
CREATE TABLE public.waitlist_entries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  name TEXT,
  company TEXT,
  interest_level INTEGER NOT NULL DEFAULT 5 CHECK (interest_level >= 1 AND interest_level <= 10),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.waitlist_entries ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (since this is a public waitlist)
CREATE POLICY "Anyone can insert waitlist entries" 
ON public.waitlist_entries 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can view waitlist entries" 
ON public.waitlist_entries 
FOR SELECT 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_waitlist_entries_updated_at
BEFORE UPDATE ON public.waitlist_entries
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create index for better performance
CREATE INDEX idx_waitlist_entries_email ON public.waitlist_entries(email);
CREATE INDEX idx_waitlist_entries_created_at ON public.waitlist_entries(created_at DESC);