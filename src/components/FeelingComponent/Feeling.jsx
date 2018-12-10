import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Feeling extends Component {
    state = {
        newElement: 0
    }
    handleClick = () => {
        this.props.history.push('/Understanding');
        this.props.dispatch({ type: 'ADD_FEELING', payload: this.state.newElement });
    }

    handleElementChange = (event) => {
        this.setState({
            newElement: event.target.value,
        })
    }
    render() {
        return (
            <div>
                <pre>{JSON.stringify(this.props.reduxState)}</pre>
                <h1>How are you feeling today?</h1>
                <select onChange={this.handleElementChange}>
                    <option value=''></option>
                    <option value={1}> 1</option>
                    <option value={2}> 2</option>
                    <option value={3}> 3</option>
                    <option value={4}> 4</option>
                    <option value={5}> 5</option>
                </select>
                <button onClick={this.handleClick}>Next</button>
            </div>
        )
    }
}

export default withRouter(connect()(Feeling));