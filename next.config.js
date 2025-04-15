// next.config.js
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [require('remark-gfm')],
    rehypePlugins: [require('rehype-slug')],
    providerImportSource: "@mdx-js/react", // Enables MDXProvider if used
  }
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  }
};

module.exports = withMDX(nextConfig);
