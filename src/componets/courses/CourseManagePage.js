import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify';
import CourseForm from "./CourseForm";

class CourseManagePage extends Component {
    constructor(props, context) {
        super(props, context)

        this.state = {
            course: Object.assign({}, props.course),
            errors: {},
            loading: false
        }

        this.updateCourseState = this.updateCourseState.bind(this)
        this.saveCourse = this.saveCourse.bind(this)
    }


    componentWillUpdate(nextProps, nextState, nextContext) {
        if (this.props.course.id !== nextProps.course.id) {
            this.setState({course: Object.assign({}, nextProps.course)})
        }
    }

    updateCourseState(event) {
        const field = event.target.name
        let course = Object.assign({}, this.state.course)
        course[field] = event.target.value
        this.setState({course: course})
    }

    saveCourse(event) {
        event.preventDefault()

        this.setState({loading: true})
        this.props.actions.saveCourse(this.state.course)
            .then(() => this.redirect())
            .catch((error) => this.redirectError(error))
    }

    redirectError(error) {
        this.setState({loading: false});
        toast.error(error)
    }

    redirect() {
        this.setState({loading: false})
        toast.success("Course saved")
        this.props.history.push("/courses");
    }

    render() {
        const {authors} = this.props
        const {course, errors, loading} = this.state

        return (
            <CourseForm
                allAuthors={authors}
                course={course}
                errors={errors}
                loading={loading}
                onChange={this.updateCourseState}
                onSave={this.saveCourse}/>
        )
    }
}

CourseManagePage.propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}

CourseManagePage.contextType = {
    router: PropTypes.object
}

export default CourseManagePage