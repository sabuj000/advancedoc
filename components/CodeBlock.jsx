// MDX maps `pre` → this component. Children are usually `<code className="language-...">...</code>`.
import React, { useState, isValidElement } from 'react'
import Prism from 'prismjs'
import 'prismjs/components/prism-json'

function getCodeString(children) {
  if (children == null) return ''
  if (typeof children === 'string') return children
  if (Array.isArray(children)) return children.map(getCodeString).join('')
  if (isValidElement(children) && children.props?.children != null) {
    return getCodeString(children.props.children)
  }
  return String(children)
}

function escapeHtml(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function pickGrammar(lang) {
  const g = Prism.languages[lang]
  if (g) return g
  if (Prism.languages.javascript) return Prism.languages.javascript
  return null
}

const CodeBlock = ({ children, className, ...props }) => {
  const [output, setOutput] = useState('')

  const code = getCodeString(children)
  const codeProps = isValidElement(children) ? children.props : {}
  const blockClass = [className, codeProps.className].filter(Boolean).join(' ')
  const langMatch = typeof blockClass === 'string' && blockClass.match(/language-(\w+)/)
  const lang = langMatch ? langMatch[1] : 'javascript'
  const grammar = pickGrammar(lang)

  const executeCode = () => {
    if (lang !== 'javascript' && lang !== 'js') {
      setOutput('Run only supports JavaScript.')
      return
    }
    try {
      const result = eval(code)
      setOutput(result != null ? String(result) : '')
    } catch (error) {
      setOutput(`Error: ${error.message}`)
    }
  }

  let highlighted = ''
  if (code) {
    try {
      highlighted = grammar ? Prism.highlight(code, grammar, lang) : escapeHtml(code)
    } catch {
      highlighted = escapeHtml(code)
    }
  }

  return (
    <div>
      <pre {...props} className={blockClass}>
        <code className={codeProps.className} dangerouslySetInnerHTML={{ __html: highlighted }} />
      </pre>
      <button type="button" onClick={executeCode}>
        Run
      </button>
      <p>Output: {output}</p>
    </div>
  )
}

export default CodeBlock
