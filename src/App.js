import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import ProductPage from "./pages/ProductPage/ProductPage";
import BagPage from "./pages/BagPage/BagPage";
import AccountPage from "./pages/AccountPage/AccountPage";
import Successful from "./pages/Successful/Successful";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import TrackOrder from "./pages/TrackOrder/TrackOrder";
import Header from "./HOC/Header/Header";
import Footer from "./HOC/Footer/Footer";

import "./App.css";

import { getProducts } from "./redux/products/productActions";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const fetchProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((shop) => dispatch(getProducts(shop)));
  };

  useEffect(() => {
    fetchProducts(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/product/:productID" component={ProductPage} />
        <Route exact path="/bag" component={BagPage} />
        <Route exact path="/successful" component={Successful} />
        <Route path="/trackorder/:orderID" component={TrackOrder} />
        <Route exact path="/account" component={AccountPage} />
        <Route component={ErrorPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
