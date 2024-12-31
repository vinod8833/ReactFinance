import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <ul>
        <li>Transactions</li>
        <li>Investments</li>
        <li>Credit Cards</li>
        <li>Loans</li>
        <li>Services</li>
        <li>Settings</li>
        <li>My Privileges</li>
      </ul>
    </div>
  );
}

export default Sidebar;
