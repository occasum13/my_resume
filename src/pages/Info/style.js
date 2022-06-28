import styled from "styled-components"

export const SectionInfo = styled.section`
width:100%;
height:100%;
display:flex;
flex-direction:column;
text-align:center;
background-color:black;
color:white;
margin:-10px;
padding:10px;


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
    font-size:16px;
    font-variant:small-caps;
}




`

export const TechInfo = styled.div`

ul {
    display:flex;
    justify-content:center;
    color:white;
}
li {
    margin-right:30px;
    width:fit-content;
    display:flex;
    height:30px;
    flex-direction:column;
    padding: 0.15em 0.5em;
    box-shadow: 2px 2px 0px 0px, 4px 4px 0px 0px, 6px 6px 0px 0px, 8px 8px 0px 0px, 10px 10px 0px 0px;

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

ul h3 {
    margin-right: 20px;
}
`

export const ProjectsInfo = styled.div`
display:flex;
flex-direction:column;
li {
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
a {
    font-size:24px;
    font-variant: small-caps;
    color:white;
}
margin-top: 30px;
margin-bottom: 30px;
display:flex;
justify-content:space-between;
`