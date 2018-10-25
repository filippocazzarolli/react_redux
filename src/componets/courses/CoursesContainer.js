import {connect} from 'react-redux'
import CoursesPage from './CoursesPage'

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    }
}

export default connect(mapStateToProps)(CoursesPage)