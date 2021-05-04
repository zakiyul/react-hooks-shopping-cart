import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts";
import DetailProduct from "./pages/DetailProduct";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/product/:productId" component={DetailProduct} />
        <Route path="/all-products">
          <AllProducts />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
