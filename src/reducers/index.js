import {combineReducers} from 'redux'
import courses from './courseReducers'
import authors from './authorReducer'
import loading from './loadingReducer'

const rootReducers = combineReducers({
    courses,
    authors,
    loading
})

export default rootReducers