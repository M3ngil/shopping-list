import React from 'react';
import './App.css';
import {NavBar} from './components/NavBar'
import {Recipes} from './components/Recipes';
import {Home} from './components/Home';
import {ShoppingList} from './components/ShoppingList';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


const links = ['home','recipes','shopping-list'];

function App() {
  return (
    <div className="App">
      
   <Router>
      <NavBar links={links} />
      <div>
        <Switch>
          <Route path="/recipes">
            <Recipes />
          </Route>
          <Route path="/shopping-list">
            <ShoppingList />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

    </div>
  );
}

export default App;
