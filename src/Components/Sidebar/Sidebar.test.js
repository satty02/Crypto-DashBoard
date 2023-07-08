// in this script Coin , CoinListAPI , SideBar is tested
import React from 'react';
import { render, screen } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from './Sidebar';
import CoinListAPI from './CoinListAPI';
import { coinsListActions } from '../../State/Action';
import Coin from './Coin';

// Mock the useSelector hook
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

const mockCoins = [
    { id: 'coin1', name: 'Bitcoin', market_cap: 1000000000, price_change_percentage_24h: 5 },
    { id: 'coin2', name: 'Ethereum', market_cap: 500000000, price_change_percentage_24h: -3 },
  ];

  describe('CoinListAPI' , ()=>{
    it('fetches and updates the coin list', async()=>{
        const mockBaseCurrency = 'usd';
        const mockDispatch = jest.fn();
       
        useSelector.mockReturnValue(mockBaseCurrency);
        useDispatch.mockReturnValue(mockDispatch);
        useSelector.mockReturnValue(mockCoins)
        
        // mock the fetch request
        jest.spyOn(global,'fetch').mockResolvedValueOnce({
            ok:true,
            json:jest.fn().mockResolvedValueOnce(mockCoins)
        })
            
        render(<CoinListAPI />);

        // Wait for the fetch request and data processing to complete
        await new Promise((resolve=>setTimeout(resolve)));

        // Assert that the dispatch action was called with the expected coins data
        expect(mockDispatch).toHaveBeenCalledWith(coinsListActions(mockCoins))

    })
  })


describe('Sidebar Component', () => {
    it('renders the list of coins correctly', () => {
      
      useSelector.mockReturnValue(mockCoins);
  
      render(<Sidebar/>);
  
      const listElement = screen.getByRole('list');
      expect(listElement).toBeInTheDocument();
  
      const listItemElements = screen.getAllByRole('listitem');
      expect(listItemElements.length).toBe(mockCoins.length);
  
      mockCoins.forEach((coin, index) => {
        const listItemElement = listItemElements[index];
        expect(listItemElement).toHaveClass('border-b-2 bg-white');
  
      });
    });
  });
  

  describe('Coin Component',()=>{
    it('renders coin details correctly',()=>{
        const mockName = 'Bitcoin';
        const mockSymbol = "btc";
        const mockPrice = 50000;
        const mockVolume = 1000000;
        const mockChange = 2.5;
        const mockBaseCurrency = 'usd';

        useSelector.mockReturnValue(mockBaseCurrency);

        render(<Coin 
            name={mockName}
            symbol={mockSymbol}
            price={mockPrice}
            volume={mockVolume}
            change={mockChange}
            />);

            const coinNameElement = screen.getByText(mockName);
            expect(coinNameElement).toBeInTheDocument();

            const coinVolumeElement = screen.getByText(`Mkt.Cap $ ${mockVolume.toLocaleString()}`);
            expect(coinVolumeElement).toBeInTheDocument();

            const coinChangeElement = screen.getByText(`${mockChange.toFixed(2)}%`);
            expect(coinChangeElement).toBeInTheDocument();
    })
  })