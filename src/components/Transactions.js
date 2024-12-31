import React from 'react';
import './Transactions.css';

function Transactions() {
  return (
    <div className="transactions">
      <h3>Recent Transactions</h3>
      <ul>
        <li>Deposit Paypal: +$2,500</li>
        <li>Deposit from my Card: -$850</li>
        <li>Jemi Wilson: +$5,400</li>
      </ul>
    </div>
  );
}

export default Transactions;
