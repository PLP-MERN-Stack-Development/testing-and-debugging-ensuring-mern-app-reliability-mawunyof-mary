const React = require('react');

function UserCard({ user, onDelete, onEdit }) {
  return React.createElement(
    'div',
    { className: 'user-card' },
    React.createElement('h3', null, user.name),
    React.createElement('p', null, user.email),
    React.createElement(
      'div',
      { className: 'user-card-actions' },
      React.createElement(
        'button',
        { onClick: () => onEdit(user) },
        'Edit'
      ),
      React.createElement(
        'button',
        { onClick: () => onDelete(user._id) },
        'Delete'
      )
    )
  );
}

module.exports = UserCard;
