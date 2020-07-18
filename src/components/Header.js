import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './styles/Header.css';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link className="item custom-item" to='/'>
                home
            </Link>
            <Link className="item custom-item" to='/about'>
                about me
            </Link>
            <Link className="item custom-item" to='/finishedprojects'>
                finished projects
            </Link>
            <Link className="item custom-item" to='/currentprojects'>
                in progress
            </Link>
            <Link className="item custom-item" to='/contact'>
                contact me
            </Link>
        </div>
    );
};

export default Header;