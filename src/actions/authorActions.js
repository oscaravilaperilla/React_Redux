import AuthorApi from '../api/mockAuthorApi';
import * as types from './actionTypes';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

export function loadAuthorSuccess(authors){
    return {type: types.LOAD_AUTHORS_SUCCESS,authors};
}

export function loadAuthors(){
    return dispatch => {
        
        return AuthorApi.getAllAuthors().then(authors => {
            dispatch(loadAuthorSuccess(authors));
        
        }).catch(error=> {
        
            throw(error);
        });
    }; 
}