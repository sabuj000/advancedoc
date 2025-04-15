// pages/_app.js
import { MDXProvider } from '@mdx-js/react'
import ApiRequest from '../components/ApiRequest'
import ApiResponse from '../components/ApiResponse'
// import '../styles/globals.css'

const components = {
  ApiRequest,
  ApiResponse,
  // Add more custom components here
}

export default function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  )
}
