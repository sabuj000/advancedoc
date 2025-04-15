// next.config.js
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // providerImportSource: "@mdx-js/react", // Uncomment if needed
  }
});

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  output: 'export',
  basePath: '/advancedoc',
  assetPrefix: '/advancedoc/',
  images: {
    unoptimized: true
  }
});
