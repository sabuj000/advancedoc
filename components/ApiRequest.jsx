import React, { useEffect, useRef } from 'react'
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'

export default function ApiRequest({ children }) {
  const codeRef = useRef(null)

  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <div style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '6px' }}>
      <strong>📤 Request</strong>
      <pre ref={codeRef}>
        <code className="language-json">
          {typeof children === 'string' ? children : String(children)}
        </code>
      </pre>
    </div>
  )
}
