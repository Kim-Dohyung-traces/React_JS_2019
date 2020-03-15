import React from 'react';
import {Link} from 'react-router-dom';
import './css/Navigation.css';

function Navigation(){
    return (
        <div className="NavBar">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    )
}
export default Navigation;