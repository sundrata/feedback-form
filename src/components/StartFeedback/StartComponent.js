import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';

class Start extends Component {
    handleClick = () => {
        this.props.history.push('/Feeling')
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Begin Feedback</button>
            </div>
        )
    }
}

export default withRouter(connect()(Start));