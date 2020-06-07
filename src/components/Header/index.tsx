import React from 'react';
import logo from './logo.png';
import './index.css'

const Header = () => {
    const componentClassName = 'c-header';

    return (
        <header className={componentClassName}>
            <img src={logo} className={`${componentClassName}__logo`} alt="logo" />
        </header>
    )
    
}

export default Header;