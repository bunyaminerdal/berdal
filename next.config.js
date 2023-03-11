/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    // declare here all your variables
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_ANON: process.env.SUPABASE_ANON,
  }
}

module.exports = nextConfig
// next.config.js

