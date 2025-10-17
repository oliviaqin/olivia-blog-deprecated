/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static HTML export
  images: {
    domains: ['i.imgur.com', 'res.cloudinary.com'],
    unoptimized: true, // Required for static export
  },
};

module.exports = nextConfig;
