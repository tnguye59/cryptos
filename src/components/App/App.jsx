import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from '../../routers/Home';

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
    </header>

    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </div>
);

export default App;
