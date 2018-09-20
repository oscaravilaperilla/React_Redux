import {createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { loadingBarMiddleware } from 'react-redux-loading-bar';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';

export default function cofigureStore(initialState){

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return  createStore(rootReducer, initialState, composeEnhancers(
        applyMiddleware(thunk, reduxImmutableStateInvariant(), promiseMiddleware(), loadingBarMiddleware(
          ))
    ));
}