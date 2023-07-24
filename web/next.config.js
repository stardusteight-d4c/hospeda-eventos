/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_SERVER_URL: process.env.NEXT_SERVER_URL, 
    SUPABASE_URL: process.env.SUPABASE_URL, 
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY, 
  },
}

module.exports = nextConfig
