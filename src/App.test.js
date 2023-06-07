import { render, screen } from '@testing-library/react';
import App from './App';

test('renders count', () => {
  render(<App />);
  const count = document.querySelector('span');
  expect(count).toBeInTheDocument();
});

test('renders button', () => {
  render(<App />);
  const button = screen.getAllByRole('button')[0];
  expect(button).toBeInTheDocument();
});
