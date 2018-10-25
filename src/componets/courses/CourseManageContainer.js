import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as courseActions from '../../action/courseActions'
import CourseManagePage from './CourseManagePage';

function getCourseById(courses, id) {
    const course = courses.filter(course => course.id === id)
    return course && course.length > 0 ? course[0] : null
}

function mapStateToProps(state, ownProps) {
    const courseId = ownProps.match.params.id
    let course = {id: '', watchHref:'', title:'', authorId:'', length:'', category:'' }

    if (courseId && state.courses.length > 0) {
        course = getCourseById(state.courses, courseId)
    }

    const authorsFormattedForDropdown = state.authors.map(author => {
        return {
            value: author.id,
            text: author.firstName + author.lastName
        }
    })

    return {
        course: course,
        authors: authorsFormattedForDropdown
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseManagePage)