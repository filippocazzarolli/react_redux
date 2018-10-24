import {combineReducers} from 'redux'
import courses from './courseReducers'
import authors from './authorReducer'

const rootReducers = combineReducers({
    courses,
    authors
})

export default rootReducers