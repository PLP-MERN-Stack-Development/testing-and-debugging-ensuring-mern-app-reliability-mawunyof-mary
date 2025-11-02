const { render, screen, fireEvent } = require('@testing-library/react');
require('@testing-library/jest-dom');
const React = require('react');
const UserCard = require('../UserCard');

describe('UserCard Component', () => {
  const mockUser = {
    _id: '123',
    name: 'John Doe',
    email: 'john@example.com',
  };

  test('renders user information', () => {
    render(
      React.createElement(UserCard, {
        user: mockUser,
        onDelete: jest.fn(),
        onEdit: jest.fn(),
      })
    );

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
  });

  test('calls onEdit when edit button is clicked', () => {
    const mockEdit = jest.fn();
    render(
      React.createElement(UserCard, {
        user: mockUser,
        onDelete: jest.fn(),
        onEdit: mockEdit,
      })
    );

    fireEvent.click(screen.getByText('Edit'));
    expect(mockEdit).toHaveBeenCalledWith(mockUser);
  });

  test('calls onDelete when delete button is clicked', () => {
    const mockDelete = jest.fn();
    render(
      React.createElement(UserCard, {
        user: mockUser,
        onDelete: mockDelete,
        onEdit: jest.fn(),
      })
    );

    fireEvent.click(screen.getByText('Delete'));
    expect(mockDelete).toHaveBeenCalledWith('123');
  });
});
