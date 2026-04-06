// next.config.js
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [require('remark-gfm')],
    rehypePlugins: [require('rehype-slug')],
    providerImportSource: "@mdx-js/react",
  }
});

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  experimental: {
    mdxRs: true
  }
});
