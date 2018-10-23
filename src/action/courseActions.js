import * as Types from './actionTypes'
import courseApi from '../api/mockCourseApi'

export function createCourse(course) {
    return { type: Types.CREATE_COURSE, course}
}

export function loadCoursesSuccess(courses) {
    return { type: Types.LOAD_COURSES_SUCCESS, courses}
}

export function loadCourses() {
    return function(dispatch) {
        courseApi.getAllCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses))
        }).catch(error => {
            throw(error)
        })
    }
}