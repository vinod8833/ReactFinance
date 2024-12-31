import React from 'react';
import './Cards.css';

function Cards() {
  return (
    <div className="cards">
      <h3>My Cards</h3>
      <div className="card">
        <p>VALID THRU: 12/22</p>
        <p>CARD HOLDER: Eddy Cusuma</p>
        <p>Balance: $5,756</p>
        <p>**** **** **** 1234</p>
      </div>
    </div>
  );
}

export default Cards;
