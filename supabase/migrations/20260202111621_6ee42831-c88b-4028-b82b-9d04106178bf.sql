-- Create a table to store contact form submissions
-- This is a simple schema for a student portfolio contact form

CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add a comment to the table for documentation
COMMENT ON TABLE public.contact_submissions IS 'Stores contact form submissions from the portfolio website';

-- Enable Row Level Security
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to insert (public contact form)
-- This is appropriate for a public contact form
CREATE POLICY "Anyone can submit contact form" 
ON public.contact_submissions 
FOR INSERT 
WITH CHECK (true);

-- Create a policy to prevent reading (privacy - only admin should see these via backend)
-- No SELECT policy = no one can read via client