const { render, screen } = require('@testing-library/react');
require('@testing-library/jest-dom');
const React = require('react');
const App = require('./App');

describe('App Component - Additional Coverage', () => {
  test('displays main heading', () => {
    render(React.createElement(App));
    expect(screen.getByText(/MERN Testing & Debugging App/i)).toBeInTheDocument();
  });

  test('displays subheading text', () => {
    render(React.createElement(App));
    expect(screen.getByText(/Welcome to the testing assignment/i)).toBeInTheDocument();
  });

  test('renders successfully', () => {
    const { container } = render(React.createElement(App));
    expect(container.querySelector('.App')).toBeInTheDocument();
  });
});
