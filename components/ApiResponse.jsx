import React, { useEffect, useRef } from 'react'
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'

export default function ApiResponse({ children }) {
  const codeRef = useRef(null)

  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <div style={{ background: '#e6f7f1', padding: '1rem', borderRadius: '6px' }}>
      <strong>📥 Response</strong>
      <pre ref={codeRef}>
        <code className="language-json">{children}</code>
      </pre>
    </div>
  )
}
