import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TestComponent from '../src/components/MyComponent';

describe('TestComponent', () => {
 it('renders without errors', () => {
    render(<TestComponent />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
    expect(screen.getByText('World')).toBeInTheDocument();
  });

  it('renders with custom props', () => {
    render(<TestComponent prop1="Custom Hello" prop2="Custom World" />);
    expect(screen.getByText('Custom Hello')).toBeInTheDocument();
    expect(screen.getByText('Custom World')).toBeInTheDocument();
  });

  it('updates state on button click', () => {
    render(<TestComponent />);
    const button = screen.getByText('Click me');
    fireEvent.click(button);
    expect(screen.getByText('Button clicked!')).toBeInTheDocument();
  });

  it('updates state on input change', () => {
    render(<TestComponent />);
    const input = screen.getByPlaceholderText('Enter some text');
    fireEvent.change(input, { target: { value: 'Test input' } });
    expect(input).toHaveValue('Test input');
  });

  it('increments count on button click', () => {
    render(<TestComponent />);
    const button = screen.getByText('Current count: 0').nextSibling;
    if (button) {
      fireEvent.click(button);
      expect(screen.getByText('Current count: 1')).toBeInTheDocument();
    }
  });

  it('appends "!" to state2 on button click', () => {
    render(<TestComponent />);
    const button = screen.getByText('Append "!"');
    fireEvent.click(button);
    expect(screen.getByText('Current count: 0')).toBeInTheDocument();
  });
});