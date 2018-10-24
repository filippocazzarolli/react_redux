import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CourseList from "./CourseList";

class CoursesPage extends Component {
    constructor(props, context) {
        super(props, context)

        this.state = {
            course: {title: ""}
        }

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onChangeTitle(event) {
        let course = this.state.course
        course.title = event.target.value
        this.setState((course))
    }

    onClickSave(event) {
        const {course} = this.state
        this.props.actions.createCourse(course)
    }


    render() {
        const {course} = this.state
        const {courses} = this.props

        return (
            <div>
                <h1>Courses</h1>
                <CourseList courses={courses}/>
                <h2>Add Course</h2>
                <input type="text" onChange={this.onChangeTitle} value={course.title}/>
                <input type="submit" value="Save" onClick={this.onClickSave}/>
            </div>
        )
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}

export default CoursesPage