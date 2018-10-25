import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import routers from './routers'
import * as serviceWorker from './serviceWorker'
import configureStore from './store/configureStore'
import { loadCourses } from './action/courseActions'
import { loadAuthors } from './action/authorAction'
import AppContainer from "./componets/AppContainer";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.min.css';


const store = configureStore()
store.dispatch(loadCourses())
store.dispatch(loadAuthors())

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <AppContainer children={routers}/>
        </Router>
    </Provider>,

    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
