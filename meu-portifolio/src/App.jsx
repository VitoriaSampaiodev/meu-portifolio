
//import React from "react"
import {createGlobalStyle} from "styled-components"
import Home from "./Components/Home/Home.jsx"

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
     
    </>

  )
  
}

export default App
