import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.jsx';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const reviewReducer = (
    state = {
        feeling:'',
        understanding:'', 
        support:'',
        comments:''
    } , action) =>{
    if(action.type === 'ADD_INFO'){
        return {...state, [action.payload.key]: action.payload.value}
    }

    return state;
}

const storeInstance = createStore(
    combineReducers({
        reviewReducer
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstance}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();