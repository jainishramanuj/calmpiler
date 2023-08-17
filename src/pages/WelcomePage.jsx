import { Box } from '@mui/material';
import img_1 from '../img/img_1.png';
import img_2 from '../img/img_2.png';
import '../styles/WelcomePage.css'
import { Link } from 'react-router-dom';

export default function WelcomePage() {
    return (
        <>
            <div>
                <Box sx={{display: 'flex', margin: '0px 4vw 0px 8vw'}}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                        <h1 className='welcome-heading'>Welcome to Calmpiler</h1>
                        <p className='under-welcome'>Take a deep breath and feel Calm, <br/>Now you can compile your code on Calmpiler.</p>
                        <Link to='/compiler'><button className='compiler-button'>Compiler</button></Link>
                    </Box>
                    <div>
                        <img src={img_1} alt="img" className="img_1"/>
                    </div>
                </Box>
                <Box sx={{display: 'flex', margin: '0 0 5vh'}}>
                    <div>
                        <img src={img_2} alt="img" className="img_2"/>
                    </div>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                        <h1 className='welcome-heading'>Why Calmpiler?</h1>
                        <p className='under-welcome'>
                        👉 Easy to use and user friendly themes,
                            <br/>👉 You can download code, input and ouput as PDF in one click,
                            <br/>👉 5+ Language support at one place,
                            <br/>👉 Direct access to AI powered code generator (Comming soon).
                        </p>
                    </Box>
                </Box>
            </div>
        </>
    )
}