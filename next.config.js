/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
      ignoreDuringBuilds: true,
  },
  // image domain
  images: {
    domains: ['res.cloudinary.com', 'unsplash.com', 'localhost', 'geni.kentanglomot.my.id',],
  },
  // disable experimental
  experimental: {
    missingSuspenseWithCSRBailout: false,
  }
}

module.exports = nextConfig
