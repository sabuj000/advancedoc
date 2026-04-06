// next.config.js
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [require('remark-gfm')],
    rehypePlugins: [require('rehype-slug')],
    providerImportSource: "@mdx-js/react",
  }
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure all page extensions are recognized
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],

  // For clean URL routing (important for GitHub Pages or custom slugs)
  trailingSlash: true,

  // Prevent Next.js from optimizing images (for static/SSG builds like Vercel or GH Pages)
  images: {
    unoptimized: true
  },
  experimental: {
    mdxRs: true
  }
});
