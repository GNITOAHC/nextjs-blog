const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Content layer configuration
  reactStrictMode: true,
  swcMinify: true,
  // Custom webpack configuration is detected. ( warning message )
  experimental: {
    webpackBuildWorker: true
  }
}

module.exports = nextConfig
module.exports = withContentlayer(nextConfig)
