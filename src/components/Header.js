import React from "react";
import './css/Header.css';
import Logo from './Logo';
import placeholder from '../placeholder.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="logoContainer">
              <Logo src={ placeholder } />
      </div>
      <div className="searchContainer">
        <input type="text" placeholder="Ara..." />
        <button>Search</button>
      </div>
    </header>
  );
};

export default Header;
