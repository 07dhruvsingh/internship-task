import React from 'react'
import './NavBar.css'

function NavBar() {
    let date = new Date()
    date = date.toDateString()
    
    return (
        <div className="navbar">
            <h1 className="navbar-title">Today's News</h1>
            <h2 className="navbar-date">{date}</h2>
        </div>
    )
}

export default NavBar
