//import React from "react"
import Github from "./imagensPortifolio/github.png"
import Linkedin from "./imagensPortifolio/linkedin.png"
import Perfil from "./imagensPortifolio/foto1.png"
import * as S from "./Style.jsx"

function Inicio() {
    return (

      <S.Inicio>
        <img src={Perfil} alt="minha foto" />
        
        <S.Apresentacao>
        <h2>Olá, sou a Vitoria</h2>
        <p>Desenvolvedora Front-End</p>
        
        <img src={Linkedin} alt="" />
        <img src={Github} alt="" />
      
        </S.Apresentacao>
  

      </S.Inicio>
    )
  }
  
  export default Inicio