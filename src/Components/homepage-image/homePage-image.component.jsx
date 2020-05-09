import React from 'react';

import './homePage-image.styles.scss';




const HomePageImage = () => {
    return (
        <section className="avatar-wrapper">
            <img className="avatar-image" src={require('/home/reynarow/React-projects/crwn-prj/src/Components/assets/images/crown.jpg')} alt='CrwnShop' />
            <div className="header">
                <h1 className="header-main">Crwn Shop </h1>
                <span className="header-submain">shop for clothing</span>
            </div>
        </section>

    )
}


export default HomePageImage;