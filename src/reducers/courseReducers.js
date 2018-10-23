import * as Types from '../action/actionTypes'

export default function courseReducers(state = [], action) {
    switch (action.type) {

        case Types.CREATE_COURSE:
            return [...state, Object.assign({}, action.course)]

        case Types.LOAD_COURSES_SUCCESS:
            return action.courses

        default:
            return state
    }
}