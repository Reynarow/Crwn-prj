import React from 'react';

import { HomePageContainer } from './HomePage.styles'
import './HomePage.styles.scss';
import Directory from '../../Components/directory-menu/directory-menu.component';

const HomePage = () => {

    return (

        <HomePageContainer>
            <Directory />
        </HomePageContainer>

    )

}


export default HomePage;