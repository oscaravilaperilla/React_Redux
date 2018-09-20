import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import { loadingBarReducer } from 'react-redux-loading-bar';

const rootReducer = combineReducers({
    courses,
    authors,
    loadingBar: loadingBarReducer
});

export default rootReducer;