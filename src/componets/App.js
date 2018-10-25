import React from 'react'
import PropTypes from 'prop-types'
import {ToastContainer} from 'react-toastify';
import Header from './common/Header'
import Loading from "./common/Loading"

const App = ({children, loading}) => {
    return (
        <div>
            <div className="container">
                <Header/>
                <hr/>
                {children}
            </div>
            <ToastContainer/>

            {loading && <Loading interval={100} dots={20}/>}
        </div>
    )
}

// class App extends Component {
//     render() {
//         return (
//             <div>
//                 <div className="container">
//                     <Header/>
//                     <hr/>
//                     {this.props.children}
//                 </div>
//                 <ToastContainer/>
//
//                 {this.props.loading && <Loading interval={100} dots={20}/>}
//             </div>
//         )
//     }
// }

App.propTypes = {
    children: PropTypes.object.isRequired,
    loading: PropTypes.bool
}

export default App