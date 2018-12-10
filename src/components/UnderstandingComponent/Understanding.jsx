import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


class Understanding extends Component {

    state = {
        newElement: 0
    }
    
    handleClick = () => {
        this.props.history.push('/Supported')
        this.props.dispatch({ type: 'ADD_UNDERSTANDING', payload: this.state.newElement });

    }

    handleElementChange = (event) => {
        console.log('changing', event.target.value);

        this.setState({
            newElement: event.target.value,
        })
    }

    render() {
        return (

            <div>
                <h1>How well did you understand today's material?</h1>
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

export default withRouter(connect()(Understanding));