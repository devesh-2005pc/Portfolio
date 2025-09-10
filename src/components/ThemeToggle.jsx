import React, { useState, useEffect } from 'react';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    const body = document.body;

    // 🔁 Always remove both before setting
  body.classList.remove('dark', 'light', 'dark-theme', 'light-theme');

    // ✅ Add correct class based on state
    body.classList.add(darkMode ? 'dark' : 'light');

    // 💾 Save preference
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className="theme-toggle">
      <label className="switch">
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default ThemeToggle;
