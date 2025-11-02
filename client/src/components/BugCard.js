import React from 'react';

function BugCard({ bug }) {
  const getSeverityColor = (severity) => {
    switch(severity) {
      case 'high': return '#ff4444';
      case 'medium': return '#ff9800';
      case 'low': return '#4caf50';
      default: return '#999';
    }
  };

  return (
    <div className="bug-card" style={{ borderLeft: `4px solid ${getSeverityColor(bug.severity)}` }}>
      <h3>{bug.title}</h3>
      <p className="description">{bug.description || 'No description'}</p>
      
      <div className="bug-meta">
        <span className="severity" style={{ backgroundColor: getSeverityColor(bug.severity) }}>
          {bug.severity ? bug.severity.toUpperCase() : 'MEDIUM'}
        </span>
        <span className="priority">Priority: {bug.priority || 3}</span>
        <span className="status">
          {bug.status === 'open' && 'Open'}
          {bug.status === 'in-progress' && 'In Progress'}
          {bug.status === 'closed' && 'Closed'}
        </span>
      </div>

      {bug.createdAt && (
        <div className="bug-date">
          Created: {new Date(bug.createdAt).toLocaleDateString()}
        </div>
      )}
    </div>
  );
}

export default BugCard;