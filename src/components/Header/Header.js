import React from 'react';
import './Header.css';

const Header = ({ toggleTheme }) => {
  return (
    <header className="header">
      <h1>Dashboard</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </header>
  );
};

export default Header;
