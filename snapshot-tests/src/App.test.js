import { render, screen } from '@testing-library/react';
import App from './App';

test('renders text Noah', () => {
  render(<App />);
  const linkElement = screen.getByText(/noah/i);
  expect(linkElement).toBeInTheDocument();
});
