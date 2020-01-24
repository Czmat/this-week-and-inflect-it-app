import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import ThisWeek from './ThisWeek';
import InflectIt from './InflectIt';
import './App.css';

export default function App() {
  return (
    <Router>
      <div>
        <nav className="navbar bg-dark">
          <Link className="nav-link" to="/even">
            This Week
          </Link>
          <Link className="nav-link" to="/">
            Inflect It
          </Link>
        </nav>

        <Switch>
          <Route path="/even">
            <ThisWeek />
          </Route>
          <Route path="/">
            <InflectIt />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
