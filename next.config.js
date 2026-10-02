/** @type {import('next').NextConfig} */

// GitHub Pages serves this repo as a project site under /slnb,
// while Cloudflare Workers serves it from the domain root.
// Build with GHPAGES=1 for GitHub Pages (static export under /slnb),
// otherwise it builds for Cloudflare Workers (no basePath).
const isGhPages = process.env.GHPAGES === '1'

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  basePath: isGhPages ? '/slnb' : '',
  // GitHub Pages needs directory-style URLs (/slnb/123/ -> /slnb/123/index.html)
  trailingSlash: isGhPages,
  ...(isGhPages ? { output: 'export' } : {}),
}

module.exports = nextConfig
