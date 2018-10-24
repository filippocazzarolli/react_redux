import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as courseActions from '../../action/courseActions'
import CourseManagePage from './CourseManagePage';

function mapStateToProps(state, ownProps) {
    // debugger
    // const courseId = ownProps.params.id;
    const courseId = ownProps.match.params.id
    console.log(courseId)
    let course = {id: '', watchHref:'', title:'', authorId:'', length:'', category:'', }
    const authorsFormattatedForDropdown = state.authors.map(author => {
        return {
            value: author.id,
            text: author.firstName + author.lastName
        }
    })

    return {
        course: course,
        authors: authorsFormattatedForDropdown
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseManagePage)