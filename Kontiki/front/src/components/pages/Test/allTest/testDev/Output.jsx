import { Box, Button, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { executeCode } from './Api';

const Output = ({editorRef, language}) => {

    const runCode = async () => {
        const sourceCode = editorRef.currentgetValue();
        const [output, setOutput] = useState(null);
        const [isLoading, setIsLoading] = useState(false);
        const [isError, setIsError] = useState(false);
        if (!sourceCode) return;
        try {
            setIsLoading(true); 
            const { run: result } = await executeCode(language, sourceCode);
            setOutput(result.output);
            result.stderr ? setIsError (true) : setIsError(false)
        } catch (error) {
            consol.log(error);
            toast ({
                title: "An error occured.",
                description: error.message || "Unable to run code",
                statut: "error", 
                duration: 6000,
            });
        }finally{
          setIsLoading(false);  
        }
    }

    return (
        <Box w="50%">
            <Text mb={2} fontSize="lg" >Output</Text>

            <Button
                className='border-solid border-2 border-indigo-600 ...'
                variant="otline"
                colorScheme='green'
                mb={4}
                onClick={runCode}
            >
                Run Code
            </Button>

            <Box
                height="75vh"
                p={2}
                border='1px solid'
                borderRadius={4}
                //borderColor={isError ? "red.500" : "#333"}
                
            >
                 {/* {output ? output : ' "Click Code" to see the output here'}  */}
                test
            </Box>
        </Box>
    )
}

export default Output
