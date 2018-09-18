import * as types from './actionTypes';
import 'babel-polyfill';
import courseApi from '../api/mockCourseApi';

export function loadCoursesSuccess(courses){
    return {type: types.LOAD_COURSES_SUCCESS, courses};
}

export function createCourseSucess(course){
    return {type: types.CREATE_COURSE_SUCCESS,course};
}

export function updateCourseSuccess(course) {
    return {type: types.UPDATE_COURSE_SUCCESS,course};
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

export function saveCourse(course) {
    return function (dispatch,getState) {
        return courseApi.saveCourse(course).then(savedCourse => {
            course.id ? dispatch(updateCourseSuccess(savedCourse)) :
            dispatch(createCourseSucess(savedCourse)); 
        }).catch(error=> {
            throw(error);
        });
    };
}