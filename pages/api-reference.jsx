import dynamic from 'next/dynamic'

// Dynamically load the MDX file as a React component
const Content = dynamic(() => import('../content/api-reference.mdx'))

export default function ApiReferencePage() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <Content />
    </main>
  )
}
