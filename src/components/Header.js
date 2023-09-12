import React from 'react';
import './Header.css';

function Header() {
    return (
        <header>
            <nav>
                <div className="logo">
                    <img src="https://vectorlogoseek.com/wp-content/uploads/2019/03/srm-institute-of-science-and-technology-vector-logo.png" alt="School Logo" />
                    <h1>SRM Institute of Science And Technology</h1>
                </div>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href='#announcements'>Announcements</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#academics">Academics</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
