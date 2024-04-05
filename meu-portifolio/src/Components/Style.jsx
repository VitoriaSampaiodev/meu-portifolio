import styled from "styled-components"

//Navegacao

export const Navegacao = styled.nav`
    background-color: #1F1D36;
    font-family: "Rowdies", sans-serif;
    
`

export const Lista = styled.ul`
display: flex;
justify-content: space-evenly;
align-items: center;
height: 23vh;
list-style: none;
font-family: "Rowdies", sans-serif;
font-weight: 700;



a{
    text-decoration: none;
    color: #F3F4ED; 
    font-size: 3rem;
    box-shadow:
  1px 5px #241663,
  -1em 0 0.4em #3E00FF ;
    
}

a:hover{
    color: #AA14F0;
    font-weight: 800;
    
    }

    
`

//Inicio

export const Inicio = styled.main`
background-color: #6E3CBC;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row;
height: 80vh;
justify-content: space-evenly;



img{
    border-radius: 50%;
    box-shadow:
  inset 0 0 1em #B5FFD9,
  0 0 1em blue;
 
}

h2, p{
    color: #F3F4ED;
    font-size: 5rem;
    
    

}

`

export const Apresentacao = styled.div`

border: solid pink;
display: flex;
justify-content: space-evenly;
flex-direction: column;
border: solid black;

img{
    width: 3.2vw;
    
}

`



