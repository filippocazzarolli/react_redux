import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Test2 extends Component {
    constructor () {
        super()

        this.state = {
            cmb1: 2,
            txt1: ""
        }

        this.selectOnchange = this.selectOnchange.bind(this)
    }

    selectOnchange = e => this.setState({ val: e.target.value });

    fieldOnChange = (event) => this.setState({[event.target.name]: event.target.value})

    render() {
        const {a} = this.props
        const {cmb1, txt1} = this.state

        return (
            <div>
                <b>Param: {a}</b>
                <br />
                <select name="cmb1" value={cmb1} onChange={this.fieldOnChange}>
                    <option value={1}>Primo</option>
                    <option value={2}>Secondo</option>
                    <option value={3}>Terzo</option>
                </select>
                <input name="txt1" value={txt1} onChange={this.fieldOnChange} />
                <br />
                <b>{cmb1}</b> - <b>{txt1}</b>
            </div>
        )
    }
}

Test2.propTypes = {
    a: PropTypes.string
}

Test2.defaultProps = {
    a: "prova def"
}

export default Test2