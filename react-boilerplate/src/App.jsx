import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Shop from './Pages/Shop/Shop';
import ItemDetail from './Pages/ItemDetail/ItemDetail';

import Nav from './components/Nav/Nav.component';

import './App.css';

const App = () => (
  <Router>
    <Nav />
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/shop/:id" component={ItemDetail} />
      </Switch>
    </div>
  </Router>
);

export default App;
