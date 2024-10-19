import { render, screen } from '@testing-library/react';
import App from './App';

test('render title "GifEx" in the app', () => {
  render(<App />);
  const title = screen.getByText(/GifEx/i);
  expect(title).toBeInTheDocument();
});
