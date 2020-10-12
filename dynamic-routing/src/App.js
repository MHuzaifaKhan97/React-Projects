import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import CompanyName from './components/CompanyName';
import Navbar from './components/Navbar';
import LogicUnitProduct from './components/LogicUnitProduct';
import AProduct from './components/AProduct';
import BProduct from './components/BProduct';
import NotFound from './components/NotFound';


function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/:component' component={CompanyName} />
          <Route path='/:component/pos' component={LogicUnitProduct} />
          <Route path='/:component/pc' component={AProduct} />
          <Route path='/:component/pi' component={BProduct} />
          <Route path='*' component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
