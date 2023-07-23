/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_SERVER_URL: process.env.NEXT_SERVER_URL, 
  },
}

module.exports = nextConfig
