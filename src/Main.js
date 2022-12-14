import React from "react"
import "./Main.css"

function Main() {
    return(
    <div className="main-container">
        <h1 className="title">Fun Facts About React</h1>
        <ul className="list-items">
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100k stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
    ); 
} 

export default Main;