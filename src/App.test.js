import {render, screen} from '@testing-library/react';
import App from './app';

test ('renders the todo app shell', () => {
  render (<App />);
  expect (
    screen.getByRole ('button', {name: /add todo/i})
  ).toBeInTheDocument ();
});
