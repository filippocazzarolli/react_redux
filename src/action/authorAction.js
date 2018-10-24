import * as Types from './actionTypes'
import authorApi from '../api/mockAuthorApi'

export function loadAuthorsSuccess(authors) {
    return { type: Types.LOAD_AUTHORS_SUCCESS, authors}
}

export function loadAuthors() {
    return function(dispatch) {
        authorApi.getAllAuthors().then(authors => {
            dispatch(loadAuthorsSuccess(authors))
        }).catch(error => {
            throw(error)
        })
    }
}