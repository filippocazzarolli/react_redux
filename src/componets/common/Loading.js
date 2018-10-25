import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Loading extends Component {
    constructor(props, context) {
        super(props, context)

        this.state = {frame: 1}
    }


    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                frame: this.state.frame + 1
            })
        }, this.props.interval)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        const styleLoading = {
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100vw',
            height: '100vh',
            backgroundColor: '#ffffff94',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }

        let dots = this.state.frame % (this.props.dots + 1)
        let text = ''
        while (dots > 0) {
            text+= '.'
            dots--
        }
        return (
            <div style={styleLoading}><div style={{width:'150px'}}>Loading{text}</div></div>
        )
    }
}

Loading.defaultProps = {
    interval: 300,
    dots: 3
}

Loading.propTypes = {
    interval: PropTypes.number,
    dots: PropTypes.number
}


export default Loading