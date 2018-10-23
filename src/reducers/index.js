import {combineReducers} from 'redux'
import * as courses from './courseReducers'

const rootReducers = combineReducers({
    courses
})

export  default rootReducers