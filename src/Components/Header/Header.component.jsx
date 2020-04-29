import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../assets/crown.svg.svg'

import CardIcon from '../Cart-icon/Cart-icon.component';
import {selectCartHidden} from '../../Redux/cart/cart.selectors'
import {signOutStart} from '../../Redux/user/user.action'
import { createStructuredSelector } from 'reselect';
import CardDropdown from '../Cart-dropdown/Cart-dropdown.component';
import { selectCurrentUser } from '../../Redux/user/user.selector';
import {selecCartItems} from '../../Redux/cart/cart.selectors'
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './Header.styles';
import './Header.styles.scss';


const Header = ({ currentUser, signOutStart, hidden, cartItems}) => (
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
                    <OptionLink className="option" onClick={() =>signOutStart(currentUser,cartItems)}>Sign Out</OptionLink>
                    :
                    <OptionLink to='/signin' className="option">
                        Sign In
                    </OptionLink>
            }

            <CardIcon />

        </OptionsContainer>

        {!hidden&&<CardDropdown isHidden={!hidden} />}
       

    </HeaderContainer>
);

const mapStatetoProps = createStructuredSelector({

    currentUser: selectCurrentUser,
    hidden:selectCartHidden,
    cartItems :selecCartItems
})
const mapDispatchToProps = dispatch =>({
    signOutStart : (user) => dispatch(signOutStart(user))
})

export default connect(mapStatetoProps,mapDispatchToProps)(Header);