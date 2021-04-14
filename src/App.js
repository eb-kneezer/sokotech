import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Header from './HOC/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import ProductPage from './pages/ProductPage/ProductPage';
import BagPage from './pages/BagPage/BagPage';
import AccountPage from './pages/AccountPage/AccountPage';
import Footer from './HOC/Footer/Footer';

import './App.css'
import { MarketContextProvider } from './context';
import Successful from './pages/Successful/Successful';
import TrackOrder from './pages/TrackOrder/TrackOrder';
import ErrorPage from './pages/ErrorPage/ErrorPage';



function App() {
  return (
    <div className="App">
      <MarketContextProvider>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route  path='/product/:productID' component={ProductPage}/>
          <Route exact path='/bag' component={BagPage}/>
          <Route exact path='/successful' component={Successful} />
          <Route path='/trackorder/:orderID' component={TrackOrder} />
          <Route exact path='/account' component={AccountPage}/>

          <Route component={ErrorPage}/>
        </Switch>
        <Footer/>
      </MarketContextProvider>
    </div>
  );
}

export default App;
