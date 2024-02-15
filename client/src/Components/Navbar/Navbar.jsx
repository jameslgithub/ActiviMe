import React from "react"
import './Navbar.css'
import logo from '../../assets/activity.png'
const Navbar = () => {
    return (
        <div className="navbar">
            <img src={logo} alt="" className="logo"/> 
            <ul>
                <li>Home</li>
                <li>Review</li>
                <li>Login/Signup</li>
            </ul>
        </div>
    )
}

export default Navbar