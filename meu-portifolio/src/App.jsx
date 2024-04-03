
//import React from "react"
import {createGlobalStyle} from "styled-components"
import Home from "./Components/PastaHome/Home.jsx"
import NavBar from "./Components/PastaNavBar/NavBar.jsx"
import About from "./Components/About/About.jsx"

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
`

function App() {
  return (
    <>
      <GlobalStyle />
      <Home />
      <NavBar />
      <h2>TESTANDO</h2>
      <About />

    </>

  )

}

export default App
