import { Box } from "@mui/material";
import logo from '../../img/logo.png'
import '../../styles/Navbar.css'
import { Link } from "react-router-dom";

export default function Navbar() {

    return(
        <>
            <Box 
                sx={{ 
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "2vh 4vw 2.5vh 8vw",
                    backgroundColor: "black"
                }}
            >
                <Box sx={{display: "flex"}} >
                    <img src={logo} alt="Logo" className="nav-logo"/>
                    <h2 className="nav-brandname">Calmpiler</h2>
                </Box>
                <Box sx={{display: "flex", marginRight: "8vw"}}>
                    <Link id="home" to="/welcome" className="nav-link">Home</Link>
                    <Link id="compiler" to="/compiler" className="nav-link">Compiler</Link>
                </Box>
            </Box>
        </>
    )
}