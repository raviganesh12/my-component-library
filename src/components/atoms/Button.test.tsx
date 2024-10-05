import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button from './Button';

describe('Button', () => {
  it('calls onPress when the button is pressed', () => {
    const mockOnPress = jest.fn();
    const { getByText } = render(<Button title="Click Me" onPress={mockOnPress} />);

    fireEvent.press(getByText('Click Me'));
    expect(mockOnPress).toHaveBeenCalled();
  });

  it('renders the button with the correct title', () => {
    const { getByText } = render(<Button title="Submit" onPress={() => {}} />);

    expect(getByText('Submit')).toBeTruthy();
  });
});
