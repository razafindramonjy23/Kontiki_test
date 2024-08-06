import React, { useRef } from 'react';

import ReactDOM from 'react-dom';
import Editor from '@monaco-editor/react';



function EditorWindows() {

  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  function showValue() {
    alert(editorRef.current.getValue());
  }

  return (
    <div>
      <button onClick={showValue}>Show value</button>
      <Editor
        height="90vh"
        defaultLanguage="javascript"
        defaultValue="// Kontiki Test"
        onMount={handleEditorDidMount}
      />
    </div>
  )
}
const rootElement = document.getElementById('root');
export default EditorWindows
