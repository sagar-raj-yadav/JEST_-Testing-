import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello world text', () => {
  render(<App />);
  const headingElement = screen.getByText(/hello world/i);
  expect(headingElement).toBeInTheDocument();
});


/*
render(<App />); -> App component ko render kro.
screen.getByText(/hello world/i); -> App component me check kro ki 
                                     'hello world' present h ya nhi
expect(headingElement).toBeInTheDocument(); -> ye line exprect kar rha h ki headingElement  hona cahiye,
tabhi test case pass hoga, nhi to fail ho jayega.            
*/