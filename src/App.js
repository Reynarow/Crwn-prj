import React from 'react';
import { Route, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage.component";
import ShopPage from "./Pages/ShopPage/ShopPage.component"
import Header from "./Components/Header/Header.component";
import SignInSignUpPage from "./Pages/Sign-in-Sign-up/Sign-in-Sign-up.component";
import { auth, createUserProfileDocument } from './Components/firebase/firebase-utils';
import './App.css';




class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFormAuth = null;

  componentDidMount() {
    this.unsubscribeFormAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const useRef = await createUserProfileDocument(userAuth);

        useRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      }
      this.setState({ currentUser: userAuth })
    })

  }

  componentWillUnmount() {
    this.unsubscribeFormAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() =><SignInSignUpPage currentUser={this.state.currentUser} />} />
        </Switch>
      </div>
    );
  }

}

export default App;
