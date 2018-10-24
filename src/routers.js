import React from 'react'
import {Switch, Route} from 'react-router-dom'
import HomePage from './componets/home/HomePage'
import CouresesContainer from './componets/courses/CouresesContainer'
import CourseManageContainer from './componets/courses/CourseManageContainer'
import AboutPage from './componets/about/AboutPage'

export default (
    <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/courses" component={CouresesContainer}/>
        <Route path="/course" component={CourseManageContainer}/>
        <Route path="/course:/id" component={CourseManageContainer}/>
        <Route path="/about" component={AboutPage}/>
    </Switch>
)