// in this script coinDetail and search component is tested
import React from 'react';
import {render, screen} from '@testing-library/react';
import {useSelector} from 'react-redux';
import CoinDetail from './CoinDetail';

jest.mock('react-redux');

describe('CoinDetail', () => {
    it('renders coin details correctly', () => { // Mock data for testing
        const mockBaseCurrency = 'usd';
        const mockCoinsData = [
            {
                id: 'coin1',
                name: 'Bitcoin',
                symbol: 'BTC',
                image: 'bitcoin.png',
                current_price: 50000,
                market_cap: 1000000000,
                high_24h: 55000,
                total_volume: 2000000000,
                total_supply: 21000000,
                circulating_supply: 18000000,
                market_cap_rank: 1
            },
            // Add more coin objects as needed
        ];
        const mockSearchQuery = 'Bitcoin';

        // Mock the useSelector hook
        useSelector.mockReturnValueOnce(mockBaseCurrency);
        useSelector.mockReturnValueOnce(mockCoinsData);
        useSelector.mockReturnValueOnce(mockSearchQuery);

        render (<CoinDetail/>);

        // Assert that the coin details are rendered correctly
        expect(screen.getByText('Bitcoin')).toBeInTheDocument();
        expect(screen.getByText('Price in $ : 50000')).toBeInTheDocument();
        expect(screen.getByText('Market Capital: $ 1000000000')).toBeInTheDocument();
        expect(screen.getByText('High (24h) : 55000')).toBeInTheDocument();
        expect(screen.getByText('total Volume : 2000000000')).toBeInTheDocument();

    });
});
