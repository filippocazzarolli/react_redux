import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import App from './App'


function mapStateToProps(state, ownProps) {
    return {
        loading: (state.loading > 0)
    }
}

export default withRouter(connect(mapStateToProps)(App))