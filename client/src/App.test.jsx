import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App Component', () => {
  test('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText(/MERN Testing & Debugging App/i)).toBeInTheDocument();
  });

  test('displays welcome message', () => {
    render(<App />);
    expect(screen.getByText(/Welcome to the testing assignment/i)).toBeInTheDocument();
  });
});
