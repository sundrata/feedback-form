import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapReduxStateToProps = (reduxState) => ({
    reduxState
})

class Review extends Component {
    render() {
        return (
            <div>
                <p>Feeling: {this.props.reduxState.initialValues.feeling}</p>
                <p>Understanding: {this.props.reduxState.initialValues.understanding} </p>
                <p>Support: {this.props.reduxState.initialValues.supported}</p>
                <p>Comments: {this.props.reduxState.initialValues.comments}</p>
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(Review);