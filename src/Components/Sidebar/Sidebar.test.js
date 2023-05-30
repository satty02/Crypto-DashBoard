
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import CoinListAPI from './CoinListAPI';
import Sidebar from './Sidebar';
import Coin from './Coin';

it(`renders the CoinListAPI with redux store`,()=>{
    const initialState = '';
    const mockStore = configureStore();
    const store = mockStore(initialState);


    const {coinListAPI,Sidebar,Coin} = render(
        <Provider store={store}>
            <CoinListAPI />
        </Provider>
    )
})