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
        <span>Terris .</span>
      </div>
      <div className="nav-links">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;

