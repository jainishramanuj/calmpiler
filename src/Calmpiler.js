import { BrowserRouter, Route, Routes } from "react-router-dom";
import CompilerPage from "./pages/CompilerPage";
import WelcomePage from "./pages/WelcomePage";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

export default function Calmpiler() {
    return(
        <>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<WelcomePage/>}/>
                    <Route path="/welcome" element={<WelcomePage/>}/>
                    <Route path="/compiler" element={<CompilerPage/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    )
}