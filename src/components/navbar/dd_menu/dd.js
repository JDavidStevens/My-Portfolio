import React from 'react';
import './dd.css';

export default function DropDown(){
    return(
        <div className="navbar-dd">
        <ul >
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#technologies">Technologies</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        </div>
    )
}