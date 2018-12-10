import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapReduxStateToProps = (reduxState) => ({
    reduxState
})

class Comments extends Component {
    state = {
        newElement: ''
    }

    handleClick = () => {
        this.props.dispatch({ type: 'ADD_COMMENTS', payload: this.state.newElement });
        this.props.history.push('/Done')
    }
    handleElementChange = (event) => {
        this.setState({
            newElement: event.target.value,
        })
    }
    render() {
        return (
            <div>
                <h1>Additional Feedback:</h1>
                <input onChange={this.handleElementChange}></input>
                <button onClick={this.handleClick}>Next</button>
               
            </div>
        )
    }
}

export default withRouter(connect(mapReduxStateToProps)(Comments));