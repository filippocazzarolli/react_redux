import * as Types from './actionTypes'
import courseApi from '../api/mockCourseApi'
import * as loading from '../action/loadingAction'

export function loadCoursesSuccess(courses) {
    return { type: Types.LOAD_COURSES_SUCCESS, courses}
}

export function createCourseSuccess(course) {
    return { type: Types.CREATE_COURSE_SUCCESS, course}
}

export function updateCourseSuccess(course) {
    return { type: Types.UPDATE_COURSE_SUCCESS, course}
}


export function loadCourses() {
    return function(dispatch) {
        dispatch(loading.loadingBegin())
        courseApi.getAllCourses().then(courses => {
            dispatch(loading.loadingEndSuccess())
            dispatch(loadCoursesSuccess(courses))
        }).catch(error => {
            dispatch(loading.loadingEndError(error))
            throw(error)
        })
    }
}

export function saveCourse(course) {
    return function (dispatch, getState) {
        return courseApi.saveCourse(course).then(savedCourse => {
            course.id ? dispatch(updateCourseSuccess(savedCourse)) : dispatch(createCourseSuccess(savedCourse))
        })
    }
}