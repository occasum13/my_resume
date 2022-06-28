import styled from "styled-components"

export const SectionInfo = styled.section`
width:97.5vw;
display:flex;
flex-direction:column;
justify-content:center;
text-align:center;
align-items:center;
background-color:black;
color:white;
margin-left:-8px;
margin-top:-8px;
padding:10px;

.who--Info {
    width: 70%;
}

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


ul {
    list-style-type: none
};

h1, h2 {
    font-size:24px;
    font-variant: small-caps;
}

h2 {
    text-align:center;
}

h3, p {
    font-size:18px;
    font-variant:small-caps;
}


a {
    margin-top:30px;
    font-size:24px;
    font-variant: small-caps;
    color:white;
}

`

export const TechInfo = styled.div`
@media only screen and (max-width:850px){
    
    ul {
    width:70%;
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    color:white;
}
li {
    margin-bottom:35px;
    width:fit-content;
    display:flex;
    justify-content:center;
    align-items:center;

    height:30px;
    flex-direction:column;
}

li p {
}

li a {
    color:white;
    font-size:18px;
    font-variant:small-caps;
    margin-top:15px;
    margin-bottom:15px;
}

li img {
    border: 0.5px solid white;
}


}

@media only screen and (min-width:850px){
    ul {
    width:850px;
    display:flex;
    justify-content:space-around;
    align-items:center;
    color:white;
}
li {
    width:fit-content;
    display:flex;
    height:30px;
    flex-direction:column;
    margin-right:10px;

}

li a {
    color:white;
    font-size:18px;
    font-variant:small-caps;
    margin-top:15px;
    margin-bottom:15px;
}

li img {
    border: 0.5px solid white;
}

}

`

export const ProjectsInfo = styled.div`
margin-top:50px;
display:flex;
flex-direction:column;
li {
    margin:25px;
    border: 2px solid white;
    line-height:5px;
    justify-content:center;
    background-color:black;
    height:fit-content;
  text-decoration: none;
  color: white;
  cursor: pointer;
  border: 3px solid;
  padding: 0.15em 0.5em;
  box-shadow: 2px 2px 0px 0px, 4px 4px 0px 0px, 6px 6px 0px 0px, 8px 8px 0px 0px, 10px 10px 0px 0px;
}

`

export const Footer = styled.footer`
@media only screen and (max-width:850px){

width:90%;
margin-top: 30px;
margin-bottom: 30px;
display:flex;
justify-content:center;
align-items:center;

.buttonA {
    width:150px;
    margin:20px;
    align-items:center;
}

.buttonB {
    width:150px;
    margin:20px;
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