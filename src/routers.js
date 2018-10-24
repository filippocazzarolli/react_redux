import React from 'react'
import {Switch, Route} from 'react-router-dom'
import HomePage from './componets/home/HomePage'
import CoursesPage from './componets/courses/CouresesContainer'
import CoursesManagePage from './componets/courses/CourseManagePage'
import AboutPage from './componets/about/AboutPage'

export default (
    <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/courses" component={CoursesPage}/>
        <Route path="/course" component={CoursesManagePage}/>
        <Route path="/course:/id" component={CoursesManagePage}/>
        <Route path="/about" component={AboutPage}/>
    </Switch>
)