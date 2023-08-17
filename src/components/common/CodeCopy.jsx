import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useState } from 'react';

export default function CodeCopy({textData}) {

    const handleCopyButton = () => {
        navigator.clipboard.writeText(textData)
        .then(() => { 
            console.log("copied") 
        })
        .catch((err) => { 
            console.log("error") 
        })
    }

    return (
        <>  
            <span onClick={handleCopyButton}> <ContentCopyIcon/> </span>
        </>
    )
}