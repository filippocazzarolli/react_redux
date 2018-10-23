import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => {
    return (
        <ul className="nav nav-pills">
            <li className="nav-item">
                <NavLink exact to="/" activeClassName="active" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink exact to="/courses" activeClassName="active" className="nav-link">Courses</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/about" activeClassName="active" className="nav-link">About</NavLink>
            </li>
        </ul>
    )
}

export default Header
