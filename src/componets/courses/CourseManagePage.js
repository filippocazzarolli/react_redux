import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CourseForm from "./CourseForm";

class CourseManagePage extends  Component {
    constructor(props, context) {
        super(props, context)

        this.state = {
            course: Object.assign({}, props.course),
            errors: {}
        }

        this.updateCourseState = this.updateCourseState.bind(this)
        this.saveCourse = this.saveCourse.bind(this)
    }

    updateCourseState(event) {
        const field = event.target.name
        let course = Object.assign({}, this.state.course)
        course[field] = event.target.value
        this.setState({course: course})
    }

    saveCourse(event) {
        event.preventDefault()  
        this.props.actions.saveCourse(this.state.course)
        // this.context.router.push('/courses')
        this.props.history.push("/courses");
    }

    render() {
        return (
            <CourseForm
                allAuthors={this.props.authors}
                course={this.state.course}
                errors={this.state.errors}
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