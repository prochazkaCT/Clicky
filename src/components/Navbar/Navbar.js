import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <nav className="navbar navbar-expand-lg">
        <ul>
            <li id= "title">Pikachu Clicky Game</li>
            <li id= "message">{props.message}</li>
            <li id = "guessCount">Count: {props.score} | Top Score: {props.topScore}</li>
        </ul>
    </nav>    
)

export default Navbar;