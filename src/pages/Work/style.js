import styled from "styled-components"

export const SectionWork = styled.section`
display:flex;
height:100vh;
flex-direction:column;
text-align:center;
align-items:center;
background-color:black;
color:white;
margin:-8px;
padding:10px;
font-size:22px;
font-variant: small-caps;

button {
    width: 200px;
    height:50px;
    cursor:pointer;
    font-variant: small-caps;
    font-size:20px;
    color:white;
    background-color:black;
    border:2px solid white;
    display:flex;
    justify-content:center;
    text-align:center;
    flex-direction:column;
    padding: 0.15em 0.5em;
    box-shadow: 2px 2px 0px 0px, 4px 4px 0px 0px, 6px 6px 0px 0px, 8px 8px 0px 0px, 10px 10px 0px 0px;
}
`

export const Footer = styled.footer`
@media only screen and (max-width:850px){

    margin-top: 30px;
    margin-bottom: 30px;
    display:flex;
    align-items:center;
    
    .buttonA {
        width:150px;
        align-items:center;
    }
    
    .buttonB {
        width:150px;
        align-items:center;
    }
    }
    
    @media only screen and (min-width:850px){
        width:100%;
        margin-top: 30px;
        margin-bottom: 30px;
        display:flex;
        justify-content:space-between;
        margin-top:auto;
        align-items:center;
    }
    
    button {
        display:flex;
        justify-content:center;
        align-items:center;
        text-align:center;
    
    }
`