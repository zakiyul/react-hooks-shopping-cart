import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts";
import Cart from "./pages/Cart";
import DetailProduct from "./pages/DetailProduct";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/product/:productId" component={DetailProduct} />
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/all-products">
          <AllProducts />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
