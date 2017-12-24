import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import { Home } from './pages'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
