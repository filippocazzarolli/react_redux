import * as Types from '../action/actionTypes'

export default function authorReducers(state = [], action) {
    switch (action.type) {

        case Types.LOAD_AUTHORS_SUCCESS:
            return action.authors

        default:
            return state
    }
}