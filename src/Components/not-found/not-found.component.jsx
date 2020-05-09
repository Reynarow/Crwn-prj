import React from 'react';


import {ErrorImageContainer,ErrorImageOverlay,ErrorImageText} from '../error-boundary/error-boundary.styles';



const NotFound = () =>(
    <ErrorImageOverlay>
        <ErrorImageContainer imageUrl ='https://i.imgur.com/QIxIKBH.png'/>
        <ErrorImageText>Sorry this page is not found or broken</ErrorImageText>
    </ErrorImageOverlay>
)

export default NotFound;