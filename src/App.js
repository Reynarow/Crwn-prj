import React, { useEffect, lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from "react-router-dom";




import AuthWarning from './Components/auth-warning/authWarning.component';

import { selectShopCollectionsArray } from './Redux/shop/shop.selector';
import { selectCurrentUser, selectError } from "./Redux/user/user.selector";

import { checkUserSession } from './Redux/user/user.action'
import { hiddenCartAtFirst } from './Redux/cart/cart.action'
import { createStructuredSelector } from "reselect";

import Header from "./Components/Header/Header.component";

import { connect } from 'react-redux';


import GlobalStyle from './global.styles';
import Spinner from './Components/Spinner/Spinner.component';
import ErrorBoundary from './Components/error-boundary/error-boundary.component';




const HomePage = lazy(() => (import('./Pages/HomePage/HomePage.component')))
const ShopPage = lazy(() => (import('./Pages/ShopPage/ShopPage.component')))
const CheckOutPage = lazy(() => (import('./Pages/CheckOutPage/CheckOutPage.component')))
const SignInSignUpPage = lazy(() => (import('./Pages/Sign-in-Sign-up/Sign-in-Sign-up.component')))
const NotFound = lazy(() => (import('./Components/not-found/not-found.component')));




const App = ({ checkUserSession, currentUser, hiddenCartAtFirst, error }) => {

  useEffect(() => {
    checkUserSession()
    hiddenCartAtFirst()

  }, [checkUserSession, hiddenCartAtFirst])



  return (
    <ErrorBoundary>
      <div>
        <GlobalStyle />
        <Header />
        {error && <AuthWarning error={error} />}
        <Suspense fallback={<Spinner />}>
          <Switch>

            <Route exact path='/' component={HomePage} />
              <Route path='/shop' component={ShopPage} />
            <Route exact path='/signin'
              render={() => currentUser ? (<Redirect to='/' />) : (<SignInSignUpPage />)} />
            <Route exact path='/checkout' component={CheckOutPage} />
            <Route component={NotFound} />

          </Switch>
        </Suspense>

      </div>
    </ErrorBoundary>
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
