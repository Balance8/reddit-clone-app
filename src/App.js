import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import SinglePostPage from "./pages/SinglePostPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">reddit</h1>
          <h2 className="App-blurb">The front page of the web</h2>
        </header>
        <Router>
        <Route
          exact
          path="/"
          render={() => <HomePage/>}
          />
        </Router>  
      </div>
    );
  }
}

export default App;
