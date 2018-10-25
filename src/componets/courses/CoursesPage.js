import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CourseList from "./CourseList";

class CoursesPage extends Component {
    constructor(props, context) {
        super(props, context)

        this.onClickAddCourse = this.onClickAddCourse.bind(this);
    }

    onClickAddCourse(event) {
        this.props.history.push("/course");
    }

    render() {
        const {courses} = this.props

        return (
            <div>
                <h1>Courses</h1>
                <input 
                    type="button" 
                    value="Add Course" 
                    className="btn btn-primary"
                    onClick={this.onClickAddCourse}/>
                <CourseList courses={courses}/>
            </div>
        )
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired
}

export default CoursesPage