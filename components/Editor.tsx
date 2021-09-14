import { useState } from 'react'
import MarkdownEditor from '@monaco-editor/react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import remarkFootnote from 'remark-footnotes'
import rehypeKatex from 'rehype-katex'
import CodeBlock from './CodeBlock'

import 'katex/dist/katex.min.css'

const editorPlaceholder = `# Welcome!\n\n
This is simplest markdown editor. You can write anything in this!\n\n
**Note:** This support [Commonmark](https://commonmark.org/help/) and [GFM (Github Flavor Markdown)](https://github.github.com/gfm/)`

const Editor: React.FC = () => {
  const [codeValue, setCodeValue] = useState<string>(editorPlaceholder)

  const handleEditorChange = (value: string | undefined): void => {
    if (value !== undefined) {
      setCodeValue(value)
    }
  }

  return (
    <>
      <div className="w-1/2 h-full">
        <MarkdownEditor
          defaultLanguage="markdown"
          value={codeValue}
          onChange={handleEditorChange}
          options={{
            minimap: {
              enabled: false,
            },
          }}
        />
      </div>
      <div className="w-1/2 h-full overflow-y-auto">
        <ReactMarkdown
          skipHtml
          className="prose px-4 py-2"
          rehypePlugins={[rehypeKatex]}
          remarkPlugins={[
            remarkGfm,
            remarkMath,
            [remarkFootnote, { inlineNotes: true }],
          ]}
          components={{
            code: CodeBlock,
          }}
        >
          {codeValue}
        </ReactMarkdown>
      </div>
    </>
  )
}

export default Editor
