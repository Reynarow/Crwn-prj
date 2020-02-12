import React from 'react';
import { Link} from 'react-router-dom';
import {ReactComponent as Logo} from  '../assest/crown.svg.svg'

import './Header.styles.scss';


const Header = () =>(
    <div className="header">
        <Link className="logo-container" to= '/' > 
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link to = '/shop'  className="option" >
                Shop
            </Link>

            <Link className="option" >
                Contact
            </Link>
        </div>
    </div>
);


export default Header;