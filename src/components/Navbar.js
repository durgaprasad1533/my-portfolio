// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // State to manage menu visibility

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <h1 className="logo">My Portfolio</h1>
            <ul className={isOpen ? "navbar-menu active" : "navbar-menu"}>
                <li><Link to="/" className="navbar-link">Home</Link></li>
                <li><Link to="/projects" className="navbar-link">Projects</Link></li>
                <li><Link to="/about" className="navbar-link">About</Link></li>
                <li><Link to="/contact" className="navbar-link">Contact</Link></li>
            </ul>
            <div className="hamburger" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
    );
};

export default Navbar;
