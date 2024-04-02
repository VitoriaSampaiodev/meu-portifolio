//import React from "react"
import Perfil from "../ImagesPortifolio/me.png"
import Linkedin from "../ImagesPortifolio/linkedin1.png"
import Github from "../ImagesPortifolio/github3.png"
import * as S from "../PastaStyle/Style.jsx"


function Home() {
    return(
        <S.SectionHome>
            <img src={Perfil} alt="" />

            <h1>Hello, my name is Vitoria</h1>
            <h2>I'm Front End Developer</h2>

        <S.SocialMedia>
            <img src={Linkedin} alt="linkedin" />
            <img src={Github} alt="github" />
        </S.SocialMedia>    


        </S.SectionHome>

    )
}

export default Home