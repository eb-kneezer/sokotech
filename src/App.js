import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import ProductPage from './pages/ProductPage/ProductPage';
import BagPage from './pages/BagPage/BagPage';
import AccountPage from './pages/AccountPage/AccountPage';
import Footer from './components/Footer/Footer';

import './App.css'
import { MarketContextProvider } from './context';



function App() {
  return (
    <div className="App">
      <MarketContextProvider>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route  path='/product/:productID' component={ProductPage}/>
          <Route  path='/bag' component={BagPage}/>
          <Route  path='/account' component={AccountPage}/>
        </Switch>
        <Footer/>
      </MarketContextProvider>
    </div>
  );
}

export default App;
