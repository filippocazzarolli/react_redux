import * as Types from '../action/actionTypes'

export function courseReducers(state = [], action) {
    switch (action.type) {

        case Types.CREATE_COURSE:
            return [...state, Object.assign({}, action.course)]

        default:
            return state
    }
}