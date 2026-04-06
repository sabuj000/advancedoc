import { MDXProvider } from '@mdx-js/react'
import { useMDXComponents } from '@mdx-js/react'
import { useMemo } from 'react'

// Import your custom components here
import CodeBlock from '../components/CodeBlock.jsx'
import Alert from '../components/Alert.jsx'

const components = {
  pre: CodeBlock,
  Alert,
  // Add more components as needed
}

export function MDXProviderWrapper({ children }) {
  const mdxComponents = useMemo(() => {
    return {
      ...useMDXComponents(),
      ...components,
    }
  }, [])

  return <MDXProvider components={mdxComponents}>{children}</MDXProvider>
} 