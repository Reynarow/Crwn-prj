import { createGlobalStyle } from 'styled-components';



const GlobalStyle = createGlobalStyle`
body{
  width:100vw;
  position:relative;
    padding: 0px;
    font-family: 'Open Sans Condensed', sans-serif;

    @media screen and (max-width:800px){
        padding:0 10px;
    }
}


body::-webkit-scrollbar {
    width: 7px;
    height:0px;
    opacity:.5;
    transition: all 1s;
    
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.212); 
    border-radius: 10px;
  }::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.781); 
    border-radius: 10px;
  }
  


a{
    text-decoration: none;
    color: black;
}


*{
    box-sizing:border-box;
}

`

export default GlobalStyle;