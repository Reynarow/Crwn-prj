import React from 'react';

import { HomePageContainer } from './HomePage.styles'
import './HomePage.styles.scss';
import Directory from '../../Components/directory-menu/directory-menu.component';
import HomePageImage from '../../Components/homepage-image/homePage-image.component';
const HomePage = () => {

    return (

        <HomePageContainer>
            <HomePageImage/>
            <Directory />
        </HomePageContainer>

    )

}


export default HomePage;