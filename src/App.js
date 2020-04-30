import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from "react-router-dom";

import HomePage from "./Pages/HomePage/HomePage.component";
import ShopPage from "./Pages/ShopPage/ShopPage.component"
import SignInSignUpPage from "./Pages/Sign-in-Sign-up/Sign-in-Sign-up.component";
import CheckOutPage from './Pages/CheckOutPage/CheckOutPage.component';
import AuthWarning from './Components/auth-warning/authWarning.component';

import { selectShopCollectionsArray } from './Redux/shop/shop.selector';
import { selectCurrentUser ,selectError } from "./Redux/user/user.selector";

import { checkUserSession } from './Redux/user/user.action'
import { hiddenCartAtFirst } from './Redux/cart/cart.action'
import { createStructuredSelector } from "reselect";

import Header from "./Components/Header/Header.component";

import { connect } from 'react-redux';


import GlobalStyle from './global.styles';







const App = ({ checkUserSession, currentUser, hiddenCartAtFirst,error}) => {

  useEffect(() => {
    checkUserSession()
    hiddenCartAtFirst()

  }, [checkUserSession, hiddenCartAtFirst])



  return (
    <div>
      <GlobalStyle/>
      <Header />
      {error&&<AuthWarning error={error}/>}
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/signin'
          render={() => currentUser ? (<Redirect to='/' />) : (<SignInSignUpPage />)} />
        <Route exact path='/checkout' component={CheckOutPage} />

      </Switch>
    </div>
  );
}



const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collection: selectShopCollectionsArray,
  error: selectError
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
  hiddenCartAtFirst: () => dispatch(hiddenCartAtFirst())
  
})




export default connect(mapStateToProps, mapDispatchToProps)(App);
