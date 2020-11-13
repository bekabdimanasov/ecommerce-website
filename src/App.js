import React from 'react'
import {Switch, Route} from "react-router-dom"

import Header from "./components/Header"
import HomePage from "./components/HomePage";
import ShopPage from "./components/ShopPage";
import AboutPage from "./components/AboutPage";

const App = () => (
  <>
    <Header/>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={ShopPage}/>
      <Route path='/about' component={AboutPage}/>
    </Switch>
  </>
);

export default App