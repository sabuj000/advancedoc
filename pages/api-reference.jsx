// pages/api-reference.jsx
import fs from 'fs'
import path from 'path'
import { parseMDX } from '../lib/mdx'
import { MDXRemote } from 'next-mdx-remote'
import components from '../components/mdx-components'
import matter from 'gray-matter'

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'content', 'api-reference.mdx')
  const source = fs.readFileSync(filePath, 'utf8')
  const { content } = matter(source)
  const mdxSource = await parseMDX(content)

  return {
    props: { mdxSource },
  }
}

export default function ApiReferencePage({ mdxSource }) {
  return (
    <div style={{ padding: '2rem' }}>
      <MDXRemote {...mdxSource} components={components} />
    </div>
  )
}
