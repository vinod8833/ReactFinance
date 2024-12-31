import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import ErrorBoundary from './components/Sidebar';
// import Cards from './components/Cards';



function App() {
  return (
    <div className="app">
      <ErrorBoundary>
      <Sidebar />
    </ErrorBoundary>
    </div>
  );
}

export default App;
