import React from 'react'
import PropTypes from 'prop-types'

function Test1(props) {
    const {a} = props

    return (
        <div>[{a}]</div>
    )
}

Test1.propTypes = {
    a: PropTypes.string.isRequired
}

export default Test1