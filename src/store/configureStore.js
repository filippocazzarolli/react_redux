import { createStore, applyMiddleware, compose } from 'redux'
import rootReducers from '../reducers'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import thunk from 'redux-thunk'

// export default function configureStore(initialState) {
//     return createStore(
//         rootReducers,
//         initialState,
//         applyMiddleware(thunk, reduxImmutableStateInvariant())
//     )
// }

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default function configureStore(initialState) {
    return createStore(
        rootReducers, 
        initialState, 
        composeEnhancers(
            applyMiddleware(thunk, reduxImmutableStateInvariant())
        )
    )
}