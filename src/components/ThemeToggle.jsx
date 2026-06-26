import React from 'react';
import './ThemeToggle.css';
import { useTheme } from '../ThemeContext.jsx';

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div className="theme-toggle">
      <label className="switch">
        <input
          type="checkbox"
          checked={darkMode}
          onChange={toggleTheme}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default ThemeToggle;
