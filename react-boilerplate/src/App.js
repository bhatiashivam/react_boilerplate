import React from "react";

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Shop from "./Pages/Shop/Shop";
import ItemDetail from "./Pages/ItemDetail/ItemDetail";

import Nav from "./components/Nav/Nav.component.jsx";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Nav />
      <div className="App">
        <Switch>
          <Route path="/" exact={true} component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/shop" exact={true} component={Shop}></Route>
          <Route path="/shop/:id" component={ItemDetail}></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
