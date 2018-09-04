import * as types from './actionTypes';
import 'babel-polyfill';
import courseApi from '../api/mockCourseApi';

export function loadCoursesSuccess(courses){
    return {type: types.LOAD_COURSES_SUCCESS, courses};
}

export   function  loadCourses(){
    // let courses;
    // try{
    //     courses = await courseApi.getAllCourses();
    // } catch (e){
    //     throw(error);
    // }
    return function(dispatch) {
        return courseApi.getAllCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            throw(error);
        });
    };
}