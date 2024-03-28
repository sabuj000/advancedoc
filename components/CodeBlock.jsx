// This is a simple CodeBlock component that might use a library like PrismJS for syntax highlighting
// and a custom executeCode function to run the JavaScript code.
import React, { useState } from 'react';
import Prism from 'prismjs';

const CodeBlock = ({ code }) => {
  const [output, setOutput] = useState('');

  const executeCode = () => {
    try {
      // This is a simplistic way to run code and would need enhancements for real-world use.
      // Note: Eval can execute arbitrary code and pose security risks!
      const result = eval(code);
      setOutput(result.toString());
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <pre>
        <code dangerouslySetInnerHTML={{ __html: Prism.highlight(code, Prism.languages.js, 'javascript') }} />
      </pre>
      <button onClick={executeCode}>Run</button>
      <p>Output: {output}</p>
    </div>
  );
};

export default CodeBlock;
