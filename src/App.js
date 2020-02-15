import React from 'react';
import {Route , Switch} from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage.component";
import ShopPage from "./Pages/ShopPage/ShopPage.component"
import Header from "./Components/Header/Header.component";
import SignInSignUpPage from "./Pages/Sign-in-Sign-up/Sign-in-Sign-up.component";
import {auth} from './Components/firebase/firebase-utils';
import './App.css';




class App extends React.Component {

  constructor(props){
    super(props)

    this.state ={
      currentUser:null
    }
  }

  unsubscribeFormAuth = null;

  componentDidMount(){
   this.unsubscribeFormAuth= auth.onAuthStateChanged(user => {
      this.setState({ currentUser:user})
      console.log(user);
    })
  
  }

  componentWillUnmount(){
    this.unsubscribeFormAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch> 
         <Route exact path='/' component ={HomePage} />
         <Route exact path='/shop' component ={ShopPage} />
         <Route exact path='/signin' component ={SignInSignUpPage} />
        </Switch>
      </div>
    );
  }
  
}

export default App;
