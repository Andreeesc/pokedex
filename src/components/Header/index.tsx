import React from 'react';
import logo from '../../logo.svg';
import './index.css'

const Header = () => {
    const componentClassName = 'c-header';

    return (
        <header className={componentClassName}>
            <img src={logo} className={`${componentClassName}__logo`} alt="logo" />
            <p>
                Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
                className={`${componentClassName}__link`}
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </header>
    )
    
}

export default Header;