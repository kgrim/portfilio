/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  // For static builds as optimized images are not supported
  images: {
    unoptimized: true,
  },
}
 
module.exports = nextConfig