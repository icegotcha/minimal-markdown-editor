import { useState } from 'react'
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import Editor from "@monaco-editor/react";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';

const MarkdownEditor: React.FC = () => {
  const [codeValue, setCodeValue] = useState<string>("#title");

  const handleEditorChange = (value: string | undefined, event: monaco.editor.IModelContentChangedEvent): void => {
    if (value !== undefined) {
      setCodeValue(value);
    }
  }

  return (
    <>
      <div className="w-1/2 h-full">
          <Editor
            defaultLanguage="markdown"
            value={codeValue}
            onChange={handleEditorChange}
            options={{
                minimap: {
                enabled: false
                }
            }}
          />
      </div>
      <div className="w-1/2 h-full px-4 py-2 prose overflow-y-auto">
        <ReactMarkdown remarkPlugins={[remarkGfm]} >{codeValue}</ReactMarkdown>
      </div>
    </>
  );
}

export default MarkdownEditor;
