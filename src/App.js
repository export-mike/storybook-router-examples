import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, Route, Link } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

class Routes extends Component {
	render() {
		return (
			<Router history={createHistory()}>
				<Route path="/" component={App} />
			</Router>
		)
	}
}

export default Routes;
