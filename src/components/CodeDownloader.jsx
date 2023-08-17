import GetAppIcon from '@mui/icons-material/GetApp';
import jsPDF from 'jspdf';

export default function CodeDownloader({code, input, output, runtimeError, compileTimeError}) {

    const handleCodeDownload = () => {
        const textObject =
            "Code: \n" +
            code + "\n\n" +
            "Input: \n" + 
            input + "\n\n" +
            "Output: \n" +
            output
        
        var doc = new jsPDF('landscape', 'px', 'a4', 'false')
        doc.text(60, 60, textObject)
        doc.save('Calmpiler.pdf')
    }
    return (
        <>
            <spna className={(runtimeError || compileTimeError || code == "") ? "download-button-disabled" : "span-button"} onClick={handleCodeDownload}>
                <GetAppIcon/>
            </spna>
        </>
    )
}