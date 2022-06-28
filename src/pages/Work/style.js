import styled from "styled-components"

export const SectionWork = styled.section`
width:100%;
height:768px;
display:flex;
flex-direction:column;
text-align:center;
background-color:black;
color:white;
margin:-10px;
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
    align-items:center;
    text-align:center;
    flex-direction:column;
    padding: 0.15em 0.5em;
    box-shadow: 2px 2px 0px 0px, 4px 4px 0px 0px, 6px 6px 0px 0px, 8px 8px 0px 0px, 10px 10px 0px 0px;
}
`

export const Footer = styled.footer`
width:100%;
margin-top: 30px;
margin-bottom: 30px;
display:flex;
justify-content:space-between;
margin-top:auto;
`