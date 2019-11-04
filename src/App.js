import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from "mobx-react";
import EditStore from './components/Edit/store';
import LibraryStore from './components/Library/store';
import Home from './components/Home/index'
import Edit from './components/Edit/index'
import Library from './components/Library/index'

class App extends Component {

  editStore = new EditStore()
  libraryStore = new LibraryStore()


  render () {
  return (
  <Router>
    <Provider editStore={this.editStore} libraryStore={this.libraryStore}>
      <div className="header">
        <Link to="/">PLANTS!</Link>
      </div>
      <div className="container">
      <Route exact path="/" component={Home} />
      <Route exact path="/edit" component={Edit} />
      <Route exact path="/library" component={Library} />
      </div>
    </Provider>
  </Router>   
  );
}
}

export default App;
