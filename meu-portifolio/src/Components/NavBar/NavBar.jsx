import Home from "../Home/Home.jsx"
import About from "../About/About.jsx"
import Projects from "../Projects/Projects.jsx"
import * as S from "../Style/Style.jsx"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"



function NavBar() {

    return (
        <BrowserRouter>
            <S.NavBar>
                <S.list>
                    <li> <Link to="/"> Home </Link> </li>
                    <li> <Link to="/About"> About </Link> </li>
                    <li> <Link to="/Projects"> Projects </Link> </li>
                </S.list>
            </S.NavBar>

            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="About" element={ <About /> } />
                <Route path="Projects" element={ <Projects /> } />

            </Routes>


        </BrowserRouter >

    )

}

export default NavBar