import { loader } from '@monaco-editor/react';
import { useState } from 'react';
import { Editor } from '@monaco-editor/react';

import * as monaco from 'monaco-editor';
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';

self.MonacoEnvironment = {
  getWorker(_, label) {
    if (label === 'json') {
      return new jsonWorker();
    }
    if (label === 'css' || label === 'scss' || label === 'less') {
      return new cssWorker();
    }
    if (label === 'html' || label === 'handlebars' || label === 'razor') {
      return new htmlWorker();
    }
    if (label === 'typescript' || label === 'javascript') {
      return new tsWorker();
    }
    return new editorWorker();
  },
};

loader.config({ monaco });

loader.init().then(/* ... */);


function EditorWindows() {

  const files = {
    'script.js': {
      name: 'script.js',
      language: 'javascript',
    },
    'style.css': {
      name: 'style.css',
      language: 'css',
    },
    'index.html': {
      name: 'index.html',
      language: 'html',
    },
  };
  const [fileName, setFileName] = useState('script.js');
  const file = files[fileName];


  return (
    <>
    <div className='btns'>
    <button disabled={fileName === 'script.js'} onClick={() => setFileName('script.js')}>
        script.js
      </button>
      <button disabled={fileName === 'style.css'} onClick={() => setFileName('style.css')}>
        style.css
      </button>
      <button disabled={fileName === 'index.html'} onClick={() => setFileName('index.html')}>
        index.html
      </button>
    </div>
 
      <Editor
        height="80vh"
        //theme="vs-dark"
        path={file.name}
        defaultLanguage={file.language}
        defaultValue={file.value}
      />
    </>
  )
}
const rootElement = document.getElementById('root');
export default EditorWindows
