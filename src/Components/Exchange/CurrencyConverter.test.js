// in this script CurrencyConverter component is tested
import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import CurrencyConverter from './CurrencyConverter';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('CurrencyConverter', () => {
    let store;

    beforeEach(() => {
        store = mockStore({
            primaryCoin: 'Bitcoin',
            secondaryCoin: 'Ethereum',
            amountQuantity: 10,
            resultAmount: '5',
            coinsData: [
                {
                    name: 'Bitcoin',
                    current_price: 50000
                }, {
                    name: 'Ethereum',
                    current_price: 3000
                },
            ],
            coinExchange: {
                BTC: {
                    name: 'Bitcoin',
                    value: 1
                },
                ETH: {
                    name: 'Ethereum',
                    value: 0.06
                }
            }
        });
    });

    test('renders CurrencyConverter component', () => {
        render (<Provider store={store}>
            <CurrencyConverter/>
        </Provider>);

        // Test the existence of specific elements
        expect(screen.getByText('Exchange Coins')).toBeInTheDocument();
        expect(screen.getByText('Enter Value:')).toBeInTheDocument();
        expect(screen.getByText('Sell')).toBeInTheDocument();
        expect(screen.getByText('Buy')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Avl:')).toBeInTheDocument();
        expect(screen.getByText('Exchange')).toBeInTheDocument();

        // Test the values of specific elements
        expect(screen.getByTestId('select1')).toHaveValue('Bitcoin');
        expect(screen.getByTestId('select2')).toHaveValue('Ethereum');
        expect(screen.getByPlaceholderText('Avl:')).toHaveValue(10);
        expect(screen.getByPlaceholderText('value')).toHaveValue('5');
    });

    test('handles currency conversion on button click', () => {
        render (<Provider store={store}>
            <CurrencyConverter/>
        </Provider>);

        // Simulate input changes
        fireEvent.change(screen.getByTestId('select1'), {
            target: {
                value: 'Bitcoin'
            }
        });
        fireEvent.change(screen.getByPlaceholderText('Avl:'), {
            target: {
                value: '20'
            }
        });

        fireEvent.change(screen.getByTestId('select2'), {
            target: {
                value: 'Ethereum'
            }
        });

        // Simulate button click
        fireEvent.click(screen.getByText('Exchange'));

        const resultInput = screen.getByPlaceholderText('value');
        expect(resultInput).toHaveValue('5')

    });
});
