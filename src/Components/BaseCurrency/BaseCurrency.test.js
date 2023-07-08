// in this script BaseCurrency component is tested

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import BaseCurrency from './BaseCurrency';
import { BaseCurrencyAction } from '../../State/Action/BaseCurrencyAction';

// Mock the useDispatch and useSelector hooks
jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('BaseCurrency', () => {
  test('renders select element with options and dispatches action on change', () => {
    // Mock the baseCurrency value from the Redux store
    const mockBaseCurrency = 'usd';
    useSelector.mockReturnValue(mockBaseCurrency);

    // Mock the dispatch function
    const mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);

    // Render the BaseCurrency component
    render(<BaseCurrency />);

    // Verify the rendering of the select element
    const selectElement = screen.getByTestId('select');
    expect(selectElement).toBeInTheDocument();

    // Verify the options in the select element
    const optionElements = screen.getAllByTestId('select-option');
    expect(optionElements).toHaveLength(4);
    expect(optionElements[0].value).toBe('inr');
    expect(optionElements[0].textContent).toBe('INR');
    expect(optionElements[1].value).toBe('usd');
    expect(optionElements[1].textContent).toBe('USD');
    expect(optionElements[2].value).toBe('eur');
    expect(optionElements[2].textContent).toBe('EURO');
    expect(optionElements[3].value).toBe('jpy');
    expect(optionElements[3].textContent).toBe('YEN');

    // Simulate a change event on the select element
    fireEvent.change(selectElement, { target: { value: 'eur' } });

    // Verify that the BaseCurrencyAction was dispatched with the correct value
    expect(mockDispatch).toHaveBeenCalledWith(BaseCurrencyAction('eur'));
  });
});
