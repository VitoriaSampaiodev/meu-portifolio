
//import React from "react"
import {createGlobalStyle} from "styled-components"
import Home from "./Components/PastaHome/Home.jsx"
import NavBar from "./Components/NavBar/NavBar.jsx"

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
`

function App() {
  return(
    <>
     <GlobalStyle />
     <Home />
     <NavBar />

    </>

  )
  
}

export default App
