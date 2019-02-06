import React, { Component } from 'react';
import {Provider} from 'react-redux'
import {HashRouter, Link} from 'react-router-dom'
import store from './dux/store'
import routes from './routes'
import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Provider store={store}>
          <nav>
            <Link to="/">All Avengers</Link>
            <Link to="/team_cap">Team Cap</Link>
            <Link to="/team_stark">Team Stark</Link>
          </nav>
          <div className="App">
            {routes}
          </div>
        </Provider>
      </HashRouter>
      
    );
  }
}

export default App;
