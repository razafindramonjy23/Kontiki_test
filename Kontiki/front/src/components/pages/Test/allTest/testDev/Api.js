import axios from 'axios';
import { LANGUAGE_VERSIONS } from './constants';

const API = axios.create({
   baseURL: "https://emkc.org/api/v2/piston" 
})

export const executeCode = async (languages, sourceCode) => {
    const response = await API.post("/execute", {
        "language": languages, 
        "version": LANGUAGE_VERSIONS[languages], 
        "files": [
            {
                content: sourceCode,
            },
        ],
    })
    return response.data;
}