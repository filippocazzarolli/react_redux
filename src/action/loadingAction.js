import * as Type from './actionTypes'

export function loadingBegin() {
    return {type: Type.LOADING_BEGIN}
}

export function loadingEndSuccess() {
    return {type: Type.LOADING_END_SUCCESS}
}

export function loadingEndError(error) {
    return {type: Type.LOADING_END_ERROR, error}
}