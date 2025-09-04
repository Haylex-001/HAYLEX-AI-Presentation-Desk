/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  productionBrowserSourceMaps: false,
  poweredByHeader: false,
  generateEtags: false,
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    CUSTOM_DOMAIN: 'presentation.haylex.cloud'
  }
}

module.exports = nextConfig
