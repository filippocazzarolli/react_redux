import React from 'react'
import {Switch, Route} from 'react-router-dom'
import HomePage from './componets/home/HomePage'
import CoursesPage from './componets/courses/CouresesContainer'
import AboutPage from './componets/about/AboutPage'

export default (
    <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/courses" component={CoursesPage}/>
        <Route path="/about" component={AboutPage}/>
    </Switch>
)