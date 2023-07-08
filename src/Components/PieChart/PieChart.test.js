// in this script PieChart is tested
import React from 'react';
import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';
import PieChart from './PieChart';

jest.mock('react-redux');

describe('PieChart', () => {
  it('renders the pie chart correctly', () => {
    // Mock data for testing
    const mockCoinsData = [
      { name: 'Bitcoin', market_cap: 1000000 },
      { name: 'Ethereum', market_cap: 500000 },
      { name: 'Ripple', market_cap: 300000 },
    ];

    // Mock the useSelector hook
    useSelector.mockReturnValue(mockCoinsData);

    render(<PieChart />);

    // Assert that the pie chart is rendered correctly
    expect(screen.getByText('Portfolio')).toBeInTheDocument();
    expect(screen.getByText('Total value:1800000')).toBeInTheDocument();
  });
});
