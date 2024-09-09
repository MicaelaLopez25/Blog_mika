import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://fbeaxdgeuujbcbzyriki.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZiZWF4ZGdldXVqYmNienlyaWtpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5MDQ3NjYsImV4cCI6MjA0MTQ4MDc2Nn0.rjkq01J2IE8Gs9XIGZl2_pyq5MVFNMbSDzo2w8zx6cU"
);

export default supabase;
