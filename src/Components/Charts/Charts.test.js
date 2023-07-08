// in this script Dropdown, chartDataAPI , selectComponent components is tested

import React from 'react';
import { render, fireEvent, screen,waitFor } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import DropdownMultiSelect from './DropdownMultiSelect';
import SelectComponent from './SelectComponent';
import { chartSelectionAction } from '../../State/Action';
import { CoinDatesAction } from '../../State/Action';
import ChartDataAPI from './ChartDataAPI';

jest.mock('react-redux');

describe('DropdownMultiSelect', () => {

  beforeEach(() => {
    useSelector.mockReturnValue([]);
    useDispatch.mockReturnValue(jest.fn());
  });

  test('should render "Select options" when no options are selected', () => {
    useSelector.mockReturnValue([]);
    render(<DropdownMultiSelect />);
    
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Select options');
  });

  test('should render selected options when options are selected', () => {
    useSelector.mockReturnValue(['option1', 'option2']);
    render(<DropdownMultiSelect />);
    
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('option1, option2 selected');
  });

  test('should toggle dropdown when button is clicked', () => {
    render(<DropdownMultiSelect />);
    
    const button = screen.getByRole('button');
    fireEvent.click(button);

    const dropdown = screen.getByRole('list');
    expect(dropdown).toBeInTheDocument();
  });

});


describe('SelectComponent', () => {
  beforeEach(() => {
    useDispatch.mockReturnValue(jest.fn());
    useSelector.mockReturnValue('');
  });

  test('should dispatch CoinDatesAction when a button is clicked', () => {
    const dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);

    render(<SelectComponent />);

    const button = screen.getByRole('button', { name:"1" });
    fireEvent.click(button);

    expect(dispatchMock).toHaveBeenCalledTimes(1);
    expect(dispatchMock).toHaveBeenCalledWith(CoinDatesAction(expect.any(String)));
  });

  test('should dispatch CoinDatesAction when the date input is changed', () => {
    const dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);

    render(<SelectComponent />);

    const dateInput = screen.getByTestId('date', { name: /date/i });
    fireEvent.change(dateInput, { target: { value: '2022-01-01' } });

    expect(dispatchMock).toHaveBeenCalledTimes(1);
    expect(dispatchMock).toHaveBeenCalledWith(CoinDatesAction(expect.any(Number)));
  });

  test('should dispatch chartSelectionAction when the chart type select is changed', () => {
    const dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);

    render(<SelectComponent />);

    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: 'Line Chart' } });

    expect(dispatchMock).toHaveBeenCalledTimes(1);
    expect(dispatchMock).toHaveBeenCalledWith(chartSelectionAction(expect.any(String)));
  });

});

describe('ChartDataAPI', () => {
  beforeEach(() => {
    useDispatch.mockReturnValue(jest.fn());
    useSelector.mockReturnValue('');
  });
  test('should dispatch chartDataAction with the expected data', async () => {
    const mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);

    const mockResponse1 = {
      market_caps: [1000, 2000, 3000],
    };
    const mockResponse2 = {
      market_caps: [4000, 5000, 6000],
    };

    global.fetch = jest.fn().mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockResponse1),
    }).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockResponse2),
    });

    render(<ChartDataAPI />);

    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledTimes(1);

    })
   
    })
 

    });

