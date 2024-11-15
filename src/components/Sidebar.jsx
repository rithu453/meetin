// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>College Hub</h2>
      <div className="sidebar-links">
        <Link to="/food">Food</Link>
        <Link to="/coding">Coding</Link>
        <Link to="/dance">Dance</Link>
        <Link to="/music">Music</Link>
        <Link to="/fitness">Fitness</Link>
        <Link to="/books">Books</Link>
      </div>
    </div>
  );
}

export default Sidebar;
