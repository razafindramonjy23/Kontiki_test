import React, { useRef, useState } from 'react'
import { Box, HStack } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import LangSwitch from './LangSwitch'
import Output from './Output';



const EditorWindows = () => {
  const editorRef = useRef();
  const [value, setValue] = useState('');
  const [language, setLanguage] = useState('javascript');

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
  }

  return (
    <Box>
      <HStack spacing={4}>
        <Box w="50%" >
          <LangSwitch language={language} onSelect={onSelect} />
          <Editor
            height="75vh"
            theme='vs-dark' s
            defaultLanguage={language}
            defaultValue="// Kontiki test"
            onMount={onMount}
            value={value}
            onChange={
              (value) => setValue(value)
            }
          />
        </Box>
        <Output editorRef={editorRef} language={language} />
      </HStack> 
    </Box>
  )
}

export default EditorWindows
