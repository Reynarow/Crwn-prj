import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../assets/crown.svg.svg';

import CardIcon from '../Cart-icon/Cart-icon.component';
import { selectCartHidden } from '../../Redux/cart/cart.selectors';
import { signOutStart } from '../../Redux/user/user.action';
import { createStructuredSelector } from 'reselect';
import CardDropdown from '../Cart-dropdown/Cart-dropdown.component';
import { selectCurrentUser } from '../../Redux/user/user.selector';
import { selecCartItems } from '../../Redux/cart/cart.selectors';
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from './Header.styles';
import './Header.styles.scss';

const Header = ({ currentUser, signOutStart, hidden, cartItems }) => {
  const [isHidden, setIsHidden] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    const prevScrollPos = window.scrollY;
    const scrollListener = () => {
      setIsScroll(true);
      const currentScrollPos = window.scrollY;
      if (prevScrollPos < currentScrollPos) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      setIsScroll(false);
    };

    document.addEventListener('scroll', scrollListener);
    return () => {
      document.removeEventListener('scroll', scrollListener);
    };
  }, [isScroll]);

  return (
    <HeaderContainer hidden={isHidden}>
      <LogoContainer to='/'>
        <Logo />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>Shop</OptionLink>
        <OptionLink>Contact</OptionLink>

        {currentUser ? (
          <OptionLink onClick={() => signOutStart(currentUser, cartItems)}>
            Sign Out
          </OptionLink>
        ) : (
          <OptionLink to='/signin'>Sign In</OptionLink>
        )}
        <OptionLink>
          <CardIcon />
        </OptionLink>
      </OptionsContainer>

      {!hidden && <CardDropdown isHidden={!hidden} />}
    </HeaderContainer>
  );
};

const mapStatetoProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
  cartItems: selecCartItems,
});
const mapDispatchToProps = (dispatch) => ({
  signOutStart: (user) => dispatch(signOutStart(user)),
});

export default connect(mapStatetoProps, mapDispatchToProps)(Header);
