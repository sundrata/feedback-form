import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <Router>
        
      </Router>
    );
  }
}

const mapStateToProps = (reduxStore) => {
  return {
    reduxStore
  }
}

export default connect(mapStateToProps)(App);
