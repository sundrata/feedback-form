import React, { Component } from 'react';
import axios from 'axios';
import '../App/App';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

const feedbackInputs = {
    feeling: '',
    understanding: '',
    support: '',
    comments: '',
}
class PageOne extends Component {
    state = feedbackInputs;

    render() {
        return {

        }
    }

}

const mapStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}
export default withRouter(connect(mapStateToProps)(PageOne));