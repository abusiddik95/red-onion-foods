import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Product from './Components/Product/Product';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SingleItem from './Components/SingleItem/SingleItem';
import Cart from './Components/Cart/Cart';
import NotFound from './Components/NotFound/NotFound';
import Review from './Components/Review/Review'
import Shipment from './Components/Shipment/Shipment';
import Blog from './Components/Blog/Blog'
import Footer from './Components/Footer/Footer';
import Inventory from './Inventory';


function App(props) {
  return (
    <div className="App">
      <Router>
      <Header></Header>
        <Switch>
          <Route path="/product">
            <Product></Product>
          </Route>
          <Route path="/singleItem">
           <SingleItem></SingleItem>
          </Route>
          {/* <Route path="/cart">
           <Cart></Cart> 
          </Route> */}
          <Route exact path="/">
          <Product></Product>
          </Route>
          <Route path="/review">
          <Review></Review>
          </Route>
          <Route path="/shipment">
          <Shipment></Shipment>
          </Route>
          <Route path="/inventory">
          <Inventory></Inventory>
          </Route>
          <Route  path="/item/:itemKey">
          <SingleItem></SingleItem>
          </Route>
          <Route path="*">
          <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      <Blog></Blog>
      <Footer></Footer>
    </div>
  );  
}

export default App;
