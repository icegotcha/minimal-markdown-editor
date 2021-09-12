import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'

type CodeBlockProps = {
  inline?: boolean,
  className?: string,
  children: React.ReactNode,
  [x: string]: any
};

const CodeBlock: React.FC<CodeBlockProps> = ({ node, inline, className, children, ...props }) => {
  const language = /language-(\w+)/.exec(className || '');
  console.log(language);
  return !inline && language ? (
    <SyntaxHighlighter language={language[1]} PreTag="div" style={dracula} customStyle={{background: ''}} {... props}>
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  );
}


export default CodeBlock;
