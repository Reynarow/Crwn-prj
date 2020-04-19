import React , {useEffect} from 'react';
import { Redirect, Route, Switch  } from "react-router-dom";

import HomePage from "./Pages/HomePage/HomePage.component";
import ShopPage from "./Pages/ShopPage/ShopPage.component"
import SignInSignUpPage from "./Pages/Sign-in-Sign-up/Sign-in-Sign-up.component";
import CheckOutPage from './Pages/CheckOutPage/CheckOutPage.component';

import { selectShopCollectionsArray } from './Redux/shop/shop.selector';
import { selectCurrentUser } from "./Redux/user/user.selector";

import {checkUserSession} from './Redux/user/user.action'

import { createStructuredSelector } from "reselect";

import Header from "./Components/Header/Header.component";

import { connect } from 'react-redux';

import './App.css';







const  App  = ({checkUserSession,currentUser}) =>{

useEffect(() =>{
  checkUserSession()
},[checkUserSession])
  


    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin'
            render={() => currentUser ? (<Redirect to='/' />) : (<SignInSignUpPage />)} />
          <Route exact path='/checkout' component={CheckOutPage}  />
            
        </Switch>
      </div>
    );
  }



const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collection: selectShopCollectionsArray
})

const mapDispatchToProps = dispatch =>({
  checkUserSession: () => dispatch(checkUserSession())
})




export default connect(mapStateToProps,mapDispatchToProps)(App);
