import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className="Nav">
    <ul class="nav-link">
        <Link to="/">
            <li>Home</li>
        </Link>
        <Link to="/tablePage">
            <li>Table Page</li>
        </Link>
        <Link to="/counter">
            <li>Counter</li>
        </Link>
    </ul>
    </nav>
  );
}

export default Nav;