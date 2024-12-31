import React from 'react';
import './Sidebar.css';

// ErrorBoundary component for catching errors
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught in ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong in Sidebar.</h2>;
    }
    return this.props.children;
  }
}


function Sidebar() {
  return (
    <ErrorBoundary>
      <div className="sidebar">
        <div className="logo">Soar Task</div>      
        <ul>
          <li>
            <img src="/icons/dashboard.svg" alt="Dashboard" />
            <span>Dashboard</span>
          </li>
          <li>
            <img src="/icons/transactions.svg" alt="Transactions" />
            <span>Transactions</span>
          </li>
          <li>
            <img src="/icons/accounts.svg" alt="Accounts" />
            <span>Accounts</span>
          </li>
          <li>
            <img src="/icons/investments.svg" alt="Investments" />
            <span>Investments</span>
          </li>
          <li>
            <img src="/icons/credit-cards.svg" alt="Credit Cards" />
            <span>Credit Cards</span>
          </li>
          <li>
            <img src="/icons/loans.svg" alt="Loans" />
            <span>Loans</span>
          </li>
          <li>
            <img src="/icons/services.svg" alt="Services" />
            <span>Services</span>
          </li>
          <li>
            <img src="/icons/privileges.svg" alt="My Privileges" />
            <span>My Privileges</span>
          </li>
          <li>
            <img src="/icons/settings.svg" alt="Settings" />
            <span>Settings</span>
          </li>
        </ul>
      </div>

      <header className="header">
        <div className="title">Overview</div>
        <div className="search-section">
          <input type="text" placeholder="Search for something" className="search-input" />
        </div>
        <div className="icons-section">
          <img src="/icons/settings-icon.png" alt="Settings" className="icon" />
          <img src="/icons/notifications-icon.png" alt="Notifications" className="icon" />
          <img src="/icons/profile-picture.png" alt="User" className="profile" />
        </div>
      </header>

    </ErrorBoundary>

    
  );
}

export default Sidebar;
