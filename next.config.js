/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed 'output: export' to enable ISR/SSR for Vercel
  images: {
    domains: [
      'i.imgur.com',
      'res.cloudinary.com',
      'substackcdn.com',
      'substack.com',
      'images.unsplash.com',
      'substackcdn.com',
      'bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com', // Substack image CDN
    ],
    // Removed 'unoptimized' to enable Next.js image optimization on Vercel
  },
};

module.exports = nextConfig;
