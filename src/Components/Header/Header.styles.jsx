import styled ,{css} from 'styled-components';
import { Link } from 'react-router-dom';

const OptionContainerStyles = css`
  padding: 10px 15px;
        transition: all 0.2s ease-out;
        
        
        
        &:hover{
          transform: translateY(-3.5px);
          
         
        }
        &:active {
          transform: translateY(0px);
        } 
`

export const HeaderContainer = styled.nav`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
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
`
export const OptionsContainer = styled.ul`
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-top: 15px;
      font-size: 20px;
`


export const OptionLink = styled(Link) `
        
     ${OptionContainerStyles}
`