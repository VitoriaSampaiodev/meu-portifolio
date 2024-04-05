
//import React from "react"
import {createGlobalStyle} from "styled-components"
import Navegacao from "./Components/Navegacao.jsx"
import Inicio from "./Components/Inicio.jsx"
import Projetos from "./Components/Projetos.jsx"
import Sobre from "./Components/Sobre.jsx"


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

      <GlobalStyle/>
      <Navegacao />
      <Inicio />
      <Sobre />
      <Projetos />


    </>

  )

}

export default App
