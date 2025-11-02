import React, { useState } from 'react';
import './App.css';
import BugForm from './components/BugForm';
import BugList from './components/BugList';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleBugAdded = () => {
    setRefreshKey(prev => prev + 1);
  };

  return (
    <ErrorBoundary>
      <div className="App">
        <header className="header">
          <h1>🐛 Bug Tracker</h1>
          <p>Track and manage bugs efficiently</p>
        </header>
        <div className="container">
          <BugForm onBugAdded={handleBugAdded} />
          <BugList key={refreshKey} />
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default App;
