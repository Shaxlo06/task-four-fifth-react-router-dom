import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {

    return (
        <div>
             <nav className='nav'>
                <ul>
                    <li>
                        <NavLink exact activeClassName='activeLink' className='link' to="/">Users</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='activeLink' className='link' to="/admin">Admin</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
