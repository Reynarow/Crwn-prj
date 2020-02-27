import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../assets/crown.svg.svg'
import { auth } from '../firebase/firebase-utils';
import CardIcon from '../Cart-icon/Cart-icon.component';
import CardDropdown from '../Cart-dropdown/Cart-dropdown.component';
import {createStructuredSelector} from 'reselect'
import {selectCartHidden} from '../../Redux/cart/cart.selectors';
import {selectCurrentUser} from '../../Redux/user/user.selector';
import './Header.styles.scss';


const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <Link className="logo-container" to='/' >
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link to='/shop' className="option" >
                Shop
            </Link>
            <Link className="option" >
                Contact
            </Link>


            {
                currentUser ?
                    <Link className="option" onClick={() => auth.signOut()}>Sign Out</Link>
                    :
                    <Link to='/signin' className="option">
                        Sign In
                    </Link>
            }

            <CardIcon />

        </div>
        {
            hidden ?
                null
                :
                <CardDropdown />
        }
    </div>
);

const mapStatetoProps = createStructuredSelector({

   currentUser:selectCurrentUser,
   hidden : selectCartHidden
})

export default connect(mapStatetoProps)(Header);