import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul style={{ display: 'flex', gap: '20px' }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/forms">Forms</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
