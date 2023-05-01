import React from 'react';
import '../styles/main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';

function Header () {
    return (
        <>
            <div>
                <header>
                    <a href="#home" className="logo">
                    <FontAwesomeIcon icon={faUtensils}  color="red" /> food</a>
            
                    <div id="menu-bar" className="fas fa-bars"> </div>
            
                    <nav className="navbar">
                        <a href="#home">home</a>
                        <a href="#speciality">Speciality</a>
                        <a href="#popular">Popular</a>
                        <a href="#gallery">Gallery</a>
                        <a href="#review">Review</a>
                        <a href="#order">Order</a>
                    </nav>
                </header>
            </div>
        </>
    )
};

export default Header;