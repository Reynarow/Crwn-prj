import styled from 'styled-components'





export const ItemContainer = styled.div`
    display:flex;
    justify-content:space-between;
    margin:auto;
    width:65vw;
    min-height:90vh;
    margin-top:20px;
    border:1px solid gray;
    border-radius:10px;
    
    @media screen and (max-width:800px) {
        width:95vw;
        justify-content:center;
        flex-direction:column-reverse;
        align-items:center;
        padding:10px
    }
`

export const ImageContainer = styled.div `
   display:flex; 
    width:50%;
    height:85vh;
    min-height:300px;
    min-width:200px;
    border-radius:15px;
    margin:20px;
    overflow:hidden;
    align-items:flex-end;
    @media screen and (max-width:800px) {
        width:80vw;
        
    }
    
`

export const Image = styled.div `
    width:100%;
    height:100%;
    background-size:cover;
    background-position:center;
    background-image:url(${props => props.imageUrl});
   
`

export const DetailsContainer = styled.div `
    display:flex;
    flex-direction:column;
    width:55%;
    @media screen and (max-width:800px) {
        width:100%;
        
    }
  
`

export const Details = styled.div `
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:60%;
    height:300px;
    margin:auto;
    .title{
      
        font-size:44px;
        font-weight:bold;
        padding: 20px 20px 0px;
        margin:16px 0px 2px;
       
    }
    .price{
            font-size:30px;
            padding:0px 20px 20px;
            
        }
   
        @media screen and (max-width:800px) {
        width:80%;
        
    }
`