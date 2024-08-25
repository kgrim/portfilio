/**
 * @type {import('next').NextConfig}
 */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: isProd ? '/portfolio' : '',
  output: 'export',
  distDir: 'dist',
  // For static builds as optimized images are not supported
  images: {
    unoptimized: true,
  },
}
 
module.exports = nextConfig