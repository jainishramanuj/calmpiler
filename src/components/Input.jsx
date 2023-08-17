import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-plain_text";
import CodeCopy from "./common/CodeCopy";

export default function Input({input, setInput, editorTheme}) {

    const onInputChange = newValue => setInput(newValue)

    return (
        <>
            <div className="input">
                <p className="label">Input</p>
                <AceEditor
                    width="30vw"
                    height="calc(35vh - 22px)"
                    mode="plain_text"
                    theme={editorTheme}
                    fontSize="14px"
                    onChange={onInputChange}
                    name="UNIQUE_ID_OF_DIV"
                    editorProps={{ $blockScrolling: true }}
                    setOptions={{
                        enableBasicAutocompletion: true,
                        enableLiveAutocompletion: true,
                        enableSnippets: true
                    }}
                />
                <div className="copy-button" title="Copy Input">
                    <CodeCopy textData={input}/>
                </div>
            </div>
        </>
    )
}