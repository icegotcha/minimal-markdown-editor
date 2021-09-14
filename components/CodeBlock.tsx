import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'

type CodeBlockProps = {
  node: React.HTMLAttributes<HTMLElement>
  children: React.ReactNode
  inline?: boolean
  className?: string
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  node,
  inline,
  className,
  children,
  ...props
}: CodeBlockProps) => {
  const language = /language-(\w+)/.exec(className || '')
  return !inline && language ? (
    <SyntaxHighlighter
      language={language[1]}
      PreTag="div"
      style={dracula}
      customStyle={{ background: '' }}
      {...props}
    >
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  )
}

export default CodeBlock
