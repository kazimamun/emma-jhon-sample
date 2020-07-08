import React from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Shop from './Component/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './Component/Review/Review';
import Inventory from './Component/Inventory/Inventory';
import NotFound from './Component/NotFound/NotFound';
import ProductDetail from './Component/ProductDetail/ProductDetail';

function App() {
  return (
    <div>
      <Header /> {/*always show */}
      <Router>
        <Switch>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path='/review'>
            <Review />
          </Route>
          <Route path='/inventory'>
            <Inventory />
          </Route>
          <Route exact path='/'>
            <Shop />
          </Route>
          <Route path='/product/:productKey'>
            <ProductDetail />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Router>      
    </div>
  );
}

export default App;