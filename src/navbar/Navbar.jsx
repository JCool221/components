import React from 'react';
import { Link } from 'react-router-dom'
import Dropdown from '../dropdown/Dropdown'
import './navbar.css'

function Navbar() {
    return (
        <div className='navbar'>
            <h1 className='nav-title'>TITLE</h1>
            <ul className='nav-list'>
                <li className='nav-list-item'>
                    <Dropdown />
                </li>
                <li className='nav-list-item'>
                    <Link to="/store">
                        store
                    </Link>
                </li>
                <li className='nav-list-item'>
                    <Link to="/counter">
                        counter
                    </Link>
                </li>
                <li className='nav-list-item'>
                    <Link to="">
                        third
                    </Link>
                </li>
                <li className='nav-list-item'>
                    <Link to="">
                        fourth
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
