import React from 'react';
import { Link } from 'react-router-dom';
import './css/Navigation.css';

function Navigation() {
    return (
        <div className="navbar">
            <div className="navbar__list">
                <Link className="navbar__list__link" to="/">Home</Link>
                <Link className="navbar__list__link" to="/about">About</Link>
            </div>
        </div>
    )
}
export default Navigation;