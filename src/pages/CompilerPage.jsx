import { useState } from "react";
import { Box, Container } from '@mui/material';
import axios from 'axios';
import Editor from "../components/Editor";
import Input from "../components/Input";
import Output from "../components/Output";
import '../styles/CompilerPage.css'

import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-plain_text";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/theme-dawn";
import "ace-builds/src-noconflict/ext-language_tools"
import AiPrompt from "../components/AiPrompt";


export default function CompilerPage() {
    
    const languages = [
        { editorValue:"c_cpp", laguageValue:"cpp14", text:"C/C++" },
        { editorValue:"java", laguageValue:"java", text:"Java" },
        { editorValue:"python", laguageValue:"python3", text:"Python" },
        { editorValue:"typescript", laguageValue:"nodejs", text:"JavaScript" },
        { editorValue:"php", laguageValue:"php", text:"PHP" }
    ]
    const [code, setCode] = useState("")
    const [output, setOutput] = useState("")
    const [input, setInput] = useState("")
    const [editorValue, setEditorValue] = useState(languages[0].editorValue)
    const [languageValue, setLanguageValue] = useState(languages[0].laguageValue)
    const [outputColor, setOutputColor] = useState("white")
    const [runTimeError, setRunTimeError] = useState(false)
    const [compileTimeError, setCompileTimeError] = useState(false)
    const [editorTheme, setEditorTheme] = useState("dracula")
    const [loading, setLoading] = useState(false)
    
    const handleRunButton = () => {
        setOutput("")
        setLoading(true)

        const config = {
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': '29180212aamsha9437527c729241p189795jsnae809924b6a9',
                'X-RapidAPI-Host': 'online-code-compiler.p.rapidapi.com'
            }
        }

        const data = {
            language: languageValue,
            version: 'latest',
            code: code,
            input: input
        }

        axios.post("https://online-code-compiler.p.rapidapi.com/v1/", data, config)
            .then((response) => {
                setRunTimeError(false)
                const resOutput = response.data.output
                const cpuTime = response.data.cpuTime

                if(cpuTime == null){
                    setOutput("Compile Time Error: " + resOutput)
                    setCompileTimeError(true)
                } else {
                    setOutput(resOutput)
                    setCompileTimeError(false)
                }
                setLoading(false)
            })
            .catch((err) => {
                const errorMessage = err.response.data.output
                setOutput("Run Time Error: \n" + errorMessage)
                setRunTimeError(true)
                setCompileTimeError(false)
                setLoading(false)
            })
    }

    const handleThemeButton = () => {
        setEditorTheme(editorTheme === "dracula" ? "dawn" : "dracula")
        setOutputColor(editorTheme === "dracula" ? "black" : "white")
    }

    return (
        <>
            <Container sx={{width: '84vw'}}>
                <AiPrompt/>
            </Container>
            <Box sx={{ display: 'flex', justifyContent: 'center'}}>
                <div>
                    <Editor 
                        code={code}
                        setCode={setCode}
                        handleRunButton={handleRunButton}
                        languages={languages}
                        editorValue={editorValue}
                        setEditorValue={setEditorValue}
                        laguageValue={languageValue}
                        setLanguageValue={setLanguageValue}
                        editorTheme={editorTheme}
                        handleThemeButton={handleThemeButton}
                        input={input}
                        output={output}
                        loading={loading}
                        runTimeError={runTimeError}
                        compileTimeError={compileTimeError}
                    />
                </div>
                <div>
                    <Box sx={{ display: 'flex', flexDirection: 'column'}}>
                        <div>
                            <Input
                                input={input}
                                setInput={setInput}
                                editorTheme={editorTheme}
                            />
                        </div>
                        <div>
                            <Output
                                output={output}
                                setOutput={setOutput}
                                runTimeError={runTimeError}
                                compileTimeError={compileTimeError}
                                editorTheme={editorTheme}
                                loading={loading}
                                outputColor={outputColor}
                                setOutputColor={setOutputColor}
                            />
                        </div>
                    </Box>
                </div>
            </Box>
        </> 
    )
}