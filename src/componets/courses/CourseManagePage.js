import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CourseForm from "./CourseForm";
import {bindActionCreators} from "redux";
import * as courseAction from "../../action/courseActions";
import connect from "react-redux/es/connect/connect";

class CourseManagePage extends  Component {
    constructor(props, context) {
        super(props, context)

        this.state = {
            course: Object.assign({}, props.courses),
            errors: {}
        }

        this.updateCourseState = this.updateCourseState.bind(this)
    }

    updateCourseState(event) {
        const field = event.target.name
        let course = Object.assign({}, this.state.course)
        course[field] = event.target.value
        return this.setState({course})
    }

    render() {
        return (
            <CourseForm
                allAuthors={this.props.authors}
                course={this.state.course}
                errors={this.state.errors}
                onChange={this.updateCourseState}/>
        )
    }
}

CourseManagePage.propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired
}

function mapStateToProps(state, ownProps) {
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
        actions: bindActionCreators(courseAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseManagePage)