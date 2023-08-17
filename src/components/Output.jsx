import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-plain_text";
import LoadingSpinner from "./common/LoadingSpinner";
import CodeCopy from "./common/CodeCopy";

export default function Output({output, runTimeError, compileTimeError, editorTheme, loading, outputColor, setOutputColor}) {
    
    if(runTimeError) setOutputColor("#E42217")
    else if(compileTimeError) setOutputColor("#d58111")
    else setOutputColor(editorTheme == 'dracula' ? 'white' : 'black')

    return (
        <>
            <div className="output">
                <p className="label">Output</p>
                <div className="loader">
                    <LoadingSpinner loading={loading} color={"black"} size={"40px"} speed={"1.5"}/>
                </div>
                <AceEditor
                    value={output}
                    readOnly={true}
                    width="30vw"
                    height="calc(35vh - 22px)"
                    mode="plain_text"
                    theme={editorTheme}
                    fontSize="14px"
                    className="output-area"
                    style={{
                        color: outputColor
                    }}
                />
                <div className="copy-button" title="Copy Output">
                    <CodeCopy textData={output}/>
                </div>
            </div>
        </>
    )
}