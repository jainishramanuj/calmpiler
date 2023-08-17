import { useState } from "react"
import { Configuration, OpenAIApi } from "openai"
import { Box } from '@mui/material';

export default function AiPrompt() {

    const key = "YOUR_OPENAI_API_KEY"
    const[openAI, setOpenAI] = useState(false)
    const[text, setText] = useState("")

    let config = new Configuration({ apiKey: key })
    delete config.baseOptions.headers['User-Agent']
    const openai = new OpenAIApi(config)

    const sendToAI = () => {
        openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "user",
                    content: text
                }
            ],
        })
        .then( res => {
            // console.log(res)
        })
        .catch( err => {
            // console.log(err)
        })
    }

    const handleButton = () => {
        setText(document.getElementById("ai-extarea").value)
        sendToAI();
    }

    const handleTextArea = () => {
        setOpenAI(!openAI)
    }

    return (
        <> 
            <div className="ai-propmt">
                <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
                    <p className="ai-title">⭐ Don't know how to write code? <a onClick={handleTextArea} className="ai-open-link">Try this AI.</a> (Currently unavailable, need a Sponsorship)</p>
                    {
                        openAI && <button className="ai-submit-button" onClick={handleButton} disabled={text == ""}>Generate</button>
                    }
                </Box>
                {
                    openAI && <textarea id="ai-textarea" name="ai-textarea" rows="3" placeholder="Write your statement here, AI will generate your code in editor area."/>
                }
            </div>
        </>
    )
}