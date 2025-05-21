import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/forms">Forms</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
