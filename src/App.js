import React from 'react';
import { Redirect, Route, Switch } from "react-router-dom";

import HomePage from "./Pages/HomePage/HomePage.component";
import ShopPage from "./Pages/ShopPage/ShopPage.component"
import SignInSignUpPage from "./Pages/Sign-in-Sign-up/Sign-in-Sign-up.component";
import CheckOutPage from './Pages/CheckOutPage/CheckOutPage.component';

import Header from "./Components/Header/Header.component";

import { auth, createUserProfileDocument } from './Components/firebase/firebase-utils';
import { connect } from 'react-redux';
import { setCurrentUser } from "./Redux/user/user.action";
import './App.css';




class App extends React.Component {



  unsubscribeFormAuth = null;

  componentDidMount() {
    this.unsubscribeFormAuth = auth.onAuthStateChanged(async userAuth => {
      const { setCurrentUser } = this.props;
      if (userAuth) {
        const useRef = await createUserProfileDocument(userAuth);

        useRef.onSnapshot(snapShot => {

          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })

        })
      }
      setCurrentUser(userAuth)
    })

  }

  componentWillUnmount() {
    this.unsubscribeFormAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin'
            render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInSignUpPage />)} />
          <Route exact path='/checkout' component={CheckOutPage} />
        </Switch>
      </div>
    );
  }

}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})


const mapDispatchToProp = dispatch => (
  {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  }
)

export default connect(mapStateToProps, mapDispatchToProp)(App);
