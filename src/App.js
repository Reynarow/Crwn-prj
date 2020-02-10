import React from 'react';
import {Route , Switch} from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage.component";
import './App.css';

const hatpage = () =>(
  <div>
    <h1>hats</h1>
  </div>
)



function App() {
  return (
    <div>
      <Switch> 
       <Route exact path='/' component ={HomePage} />
       <Route exact path='/shop/hats' component ={hatpage} />
      </Switch>
    </div>
  );
}

export default App;
