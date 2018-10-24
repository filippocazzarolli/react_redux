import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as courseActions from '../../action/courseActions'
import CoursesPage from './CoursesPage'

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage)