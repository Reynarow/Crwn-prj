import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../assets/crown.svg.svg'
import { auth } from '../firebase/firebase-utils';
import CardIcon from '../Cart-icon/Cart-icon.component';
import CardDropdown from '../Cart-dropdown/Cart-dropdown.component';
import { createStructuredSelector } from 'reselect'
import { selectCartHidden } from '../../Redux/cart/cart.selectors';
import { selectCurrentUser } from '../../Redux/user/user.selector';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './Header.styles';
import './Header.styles.scss';


const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to='/' >
            <Logo className="logo" />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop' className="option" >
                Shop
            </OptionLink>
            <OptionLink className="option" >
                Contact
            </OptionLink>


            {
                currentUser ?
                    <OptionLink className="option" onClick={() => auth.signOut()}>Sign Out</OptionLink>
                    :
                    <OptionLink to='/signin' className="option">
                        Sign In
                    </OptionLink>
            }

            <CardIcon />

        </OptionsContainer>
        {
            hidden ?
                null
                :
                <CardDropdown />
        }
    </HeaderContainer>
);

const mapStatetoProps = createStructuredSelector({

    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStatetoProps)(Header);