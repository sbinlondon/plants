import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from "mobx-react";
import EditStore from './components/Edit/store';
import Home from './components/Home/index'
import Edit from './components/Edit/index'

class App extends Component {

  editStore = new EditStore()


  render () {
  return (
  <Router>
    <Provider editStore={this.editStore}>
      <div className="header">
        <Link to="/">PLANTS!</Link>
      </div>
      <div className="container">
      <Route exact path="/" component={Home} />
      <Route exact path="/edit" component={Edit} />
      </div>
    </Provider>
  </Router>   
  );
}
}

export default App;
