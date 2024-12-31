import React from 'react';
import './Dashboard.css';
import Cards from './Cards';
import Transactions from './Transactions';
import WeeklyActivity from './WeeklyActivity';
import ExpenseStatistics from './ExpenseStatistics';
import QuickTransfer from './QuickTransfer';
import BalanceHistory from './BalanceHistory';

function Dashboard() {
  return (
    <div className="dashboard">
      <Cards />
      <Transactions />
      <WeeklyActivity />
      <ExpenseStatistics />
      <QuickTransfer />
      <BalanceHistory />
    </div>
  );
}

export default Dashboard;
