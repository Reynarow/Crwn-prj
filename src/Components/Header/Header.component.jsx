import React from 'react';
import { Link} from 'react-router-dom';
import {ReactComponent as Logo} from  '../assest/crown.svg.svg'
import {auth} from '../firebase/firebase-utils';
import './Header.styles.scss';


const Header = ({currentUser}) =>(
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
            
               {
                   currentUser?
                   <Link className="option"  onClick = {() => auth.signOut()}>Sign Out</Link> 
                   :
                   <Link to = '/signin' className="option"> 
                        Sign In
                    </Link>
               }
            

           
        </div>
    </div>
);


export default Header;