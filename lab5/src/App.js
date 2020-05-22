import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { HomePage } from './pages/home-page/home-page.component'
import { CustomersPage } from './pages/customers-page/customers-page.component'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav className="App-nav">
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/customers">Our customers</Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              {/* <HomePage/> */}
            </Route>
            <Route path="/customers">
              <CustomersPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
