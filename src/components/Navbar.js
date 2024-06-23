// src/components/Navbar.js

import React from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
    >
      <div className="brand">
        <span>Terris Lua</span>
      </div>
      <div className="nav-links">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/terris-l-4a5842130/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/TerrisLua" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
          <a href="https://github.com/your-other-github-profile" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

