import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/transactions">Transactions</Link></li>
        <li><Link to="/transfer">Transfer</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
