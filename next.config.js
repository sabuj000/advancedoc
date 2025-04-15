// next.config.js
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // providerImportSource: "@mdx-js/react", // Uncomment if using MDXProvider
  }
});

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  trailingSlash: true,
  images: {
    unoptimized: true
  }
});
