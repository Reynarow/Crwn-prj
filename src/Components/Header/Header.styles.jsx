import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const OptionContainerStyles = css`
  padding: 10px 25px;
  border:1px solid transparent;
  border-radius:5px;
  margin-left:15px;

  &:last-child{
    border:unset;
    &:hover{
            background-color:unset;
          color:unset;
          }
  }
        transition: all 0.2s ease-out;
        
        
        
        &:hover{
          background-color:black;
          color:white;
        }
     
        @media screen and (max-width:800px){
          padding:2px 6px;
          margin-left:unset;
          font-size:18px;
          &:last-child{
            padding: 0px;
          }
        }
`

export const HeaderContainer = styled.nav`
    height: 55px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
    margin-bottom: 25px;
    position:fixed;
    z-index:20;
   background-color: rgba(255,255,255,0.3);
    top:0;
    right:0;
    @media screen and (max-width: 800px) {
      height:40px;
    }
`;

export const LogoContainer = styled(Link)`
      height: 100%;
      width:70px;
      padding: 7px;
      margin-bottom: 10px;
      transition: all .2s ease-in;
      
      &:hover{
        transform: scale(1.2);
      }

      @media screen and (max-width:800px){
        width:40px;
        margin-top:5px;
        padding:unset;
        height:70%;
      }
`
export const OptionsContainer = styled.ul`
      width: 80%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-top: 0;
      font-size: 20px;

      @media screen and (max-width:800px){
        width:80%;
        padding:unset;
      }
`


export const OptionLink = styled(Link)`
        
     ${OptionContainerStyles}
`