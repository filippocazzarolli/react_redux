import * as Type from '../action/actionTypes'
import initialState from './initialState'

export default function loadingReducers(state = initialState.loading, action) {

    switch (action.type) {
        case Type.LOADING_BEGIN:
            return state + 1

        case Type.LOADING_END_SUCCESS:
            return state - 1

        case Type.LOADING_END_ERROR:
            return state - 1

        default:
            return state
    }
}
