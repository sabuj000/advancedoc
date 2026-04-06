// pages/_app.js
import { MDXProviderWrapper } from '../lib/mdx-provider'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <MDXProviderWrapper>
      <Component {...pageProps} />
    </MDXProviderWrapper>
  )
}
