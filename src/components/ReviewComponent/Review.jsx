import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapReduxStateToProps = (reduxState) => ({
    reduxState
})

class Review extends Component {
    render() {
        return (
            <div>
                <p>Feeling: {this.props.reduxState.buttonReducer.feeling}</p>
                <p>Understanding: {this.props.reduxState.buttonReducer.understanding} </p>
                <p>Support: {this.props.reduxState.buttonReducer.supported}</p>
                <p>Comments: {this.props.reduxState.buttonReducer.comments}</p>
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(Review);