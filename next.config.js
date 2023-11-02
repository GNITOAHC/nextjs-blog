const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Content layer configuration
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
module.exports = withContentlayer(nextConfig)
