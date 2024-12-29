import React from "react";
import "../styles/Header.css";

const Header = ({ toggleTheme, isDarkTheme }) => {
    return (
        <header className="header">
            <div className="header-logo">Company</div>
            <nav className="header-nav">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <div className="header-actions">
                <div className="header-search">
                    <input type="text" placeholder="Search for dishes..." />
                </div>
                {/* Slider for theme toggle */}
                <div className="theme-toggle-slider">
                    <input 
                        type="checkbox" 
                        id="theme-toggle" 
                        checked={isDarkTheme} 
                        onChange={toggleTheme} 
                    />
                    <label htmlFor="theme-toggle"></label>
                </div>
            </div>
        </header>
    );
};

export default Header;
