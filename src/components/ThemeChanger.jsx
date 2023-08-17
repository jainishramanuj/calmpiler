import WbSunnySharpIcon from '@mui/icons-material/WbSunnySharp';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function ThemeChanger({handleThemeButton, editorTheme}) {
    return (
        <>  
            <spna className="span-button" onClick={handleThemeButton}>
                {
                    editorTheme === "dracula" ? <WbSunnySharpIcon/> : <DarkModeIcon/>
                }
            </spna>
        </>
    )
}