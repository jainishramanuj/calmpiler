import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-gruvbox_dark_hard";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-typescript";
import "ace-builds/src-noconflict/mode-php";
import ThemeChanger from "./ThemeChanger";
import CodeDownloader from "./CodeDownloader";
import CodeCopy from "./common/CodeCopy";

export default function Editor({
    code, setCode, handleRunButton, languages, editorValue, setEditorValue, languageValue,
    setLanguageValue,editorTheme, handleThemeButton, input, output, loading, runtimError,
    compileTimeError
})
{

    const onEditorChange = (newValue) => setCode(newValue)

    const handleLanguageChange = (event) => {
        const selectedLanguageValue = event.target.options[event.target.selectedIndex].getAttribute('data');
        setEditorValue(event.target.value)
        setLanguageValue(selectedLanguageValue)
    }

    return (
        <>
            <div className="editor">
                <div className="editor-label">
                    <div>
                        <select id="language" value={editorValue} onChange={handleLanguageChange} title="Select Language">
                            {
                                languages.map((language) => {
                                    return(
                                        <option key={language.text} value={language.editorValue} data={language.laguageValue}> {language.text} </option>
                                    )
                                })
                            }
                        </select>
                        <span title="Change Theme">
                            <ThemeChanger handleThemeButton={handleThemeButton} editorTheme={editorTheme}/>
                        </span>
                    </div>
                    <p className="label">Editor</p>
                    <div>
                        <span title="Download Code & IO">
                            <CodeDownloader 
                                code={code} 
                                input={input} 
                                output={output}
                                runtimError={runtimError}
                                compileTimeError={compileTimeError}
                            />
                        </span>
                        <button className="run-button" onClick={handleRunButton} disabled={loading || code==""} title="Run Code"> Run </button>
                    </div>
                </div>

                <AceEditor
                    width="50vw"
                    height="70vh"
                    mode={editorValue}
                    theme={editorTheme}
                    fontSize="14px"
                    onChange={onEditorChange}
                    editorProps={{ $blockScrolling: true }}
                    setOptions={{
                        enableBasicAutocompletion: true,
                        enableLiveAutocompletion: true,
                        enableSnippets: true
                    }}
                    style={
                        editorTheme !== "dracula" ? "" : 
                        {
                            borderRight: "3px solid #44475a"
                        }
                    }
                />
                <div className="copy-button" title="Copy Code">
                    <CodeCopy textData={code}/>
                </div>
            </div>
        </>
    )
}