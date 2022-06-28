import styled from "styled-components"

export const SectionHome = styled.section`
@media only screen and (max-width:768px){
  height:100vh;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center; 
  background-image:none;
  
  .home--Info {
  height:180px;
  width:325px;
  display:flex;
  flex-direction:column;
  align-items:center;
  line-height:5px;
  justify-content:center;
text-decoration: none;
color: #000;
cursor: pointer;
border: 3px solid;
padding: 0.15em 0.5em;
box-shadow: 2px 2px 0px 0px, 4px 4px 0px 0px, 6px 6px 0px 0px, 8px 8px 0px 0px, 10px 10px 0px 0px;

  p {
    font-size: 18px;
  }

  h1, h2 {
      font-size:22px;
      font-variant: small-caps;
  }
}
}

@media only screen and (min-width:768px){    
    width:100vw;
    height:100vh;
    display:flex;
    margin:-8px;
    flex-direction:column;
    justify-content:center;
    align-items:center; 
    background-image: url('john.png');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;

    .home--Info {
    height:180px;
    width:500px;
    display:flex;
    flex-direction:column;
    align-items:center;
    line-height:5px;
    justify-content:center;
    background-color:white;
  text-decoration: none;
  color: #000;
  cursor: pointer;
  border: 3px solid;
  padding: 0.15em 0.5em;
  box-shadow: 2px 2px 0px 0px, 4px 4px 0px 0px, 6px 6px 0px 0px, 8px 8px 0px 0px, 10px 10px 0px 0px;

    p {
      font-size: 22px;
    }

    h1, h2 {
        font-size:32px;
        font-variant: small-caps;
    }
  }
  }

    

    button {
            position: relative;
            text-align: center;
            padding: 5px;
            margin-bottom: 6px;
            margin-top:35px;
            height: 15px;
            width: 200px;
            border-style:none;
            background-color:transparent;
            cursor:pointer;
            color: #fff;
            touch-action: manipulation; 
            -webkit-animation: bounce .7s infinite alternate;
            -moz-animation: bounce .7s infinite alternate;
            animation: bounce .7s infinite alternate;
          }
          @-webkit-keyframes bounce {
            to { -webkit-transform: scale(1.3); }
          }
          @-moz-keyframes bounce {
            to { -moz-transform: scale(1.3); }
          }
          @keyframes bounce {
            to { transform: scale(1.3); }
          }
          
          button:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 44%;
            background: black;
            transform: skew(0deg, 15deg);
            padding: 0.25em 0.5em;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 2px 0px 0px, 5px 3px 0px 0px;
          }
          button:after {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            height: 100%;
            width: 43%;
            background: black;
            transform: skew(0deg, -15deg);
            padding: 0.25em 0.5em;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;
          }
          
          button:hover span {
            transform: scale(.9);
            opacity: .75;
          }
    }
`;



