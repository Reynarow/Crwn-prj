import styled, { css } from 'styled-components';


const getButtonStyles = (props) =>{
    if(props.isGoogleSignIn){
        return GoogleSignInStyles
    }
    return props.inverted ? InvertedButtomStyles : buttonStyles
}




export const CustomButtonContainer = styled.button`
  flex: 0 1 auto;
  width: 80%;
  height: 50px;
  letter-spacing: 0.5px;
  padding: 0px 7px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border-radius: 5px;
  cursor: pointer;
  transition: all .1s ease-out;
  outline: none;
  margin: 7.5px 10px;
  backface-visibility: hidden;
  align-items: center;
  justify-content: center;
    &:hover {
  
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.432);
    }
    &:active {
        transform: translateY(0px);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.432);
    } 

    ${getButtonStyles}

`
export const SpinnerIcon = styled.i`
  display: inline-flex;
  width: 23px;
  height: 23px;
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: #636767;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }

`





const buttonStyles = css`
    background-color: black;
    color: white;
    border: none;
`

 const InvertedButtomStyles = css`

    background-color: white;
    color:black;
    border:none;
    
`

 const GoogleSignInStyles = css`
    
    background-color:#4285f4 ;
    color: white;
    border: none;

        &:hover{
            background-color: #357ae8;
             
        }
`


