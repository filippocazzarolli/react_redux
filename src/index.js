import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import routers from './routers'
import * as serviceWorker from './serviceWorker'
import configureStore from './store/configureStore'
import App from "./componets/App";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App children={routers}/>
        </Router>
    </Provider>,

    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
