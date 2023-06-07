import React from "react";
import {render, waitFor} from '@testing-library/react';
import { Provider } from "react-redux";
import configureMockStore from 'redux-mock-store';
import thunk from "redux-thunk";

import CoinListAPI from "./CoinListAPI";
import { coinsListActions } from "../../State/Action"; 

const mockStore = configureMockStore([thunk]);

describe('MyAsyncComponent', ()=>{
    it(`should render user data after successfull API call`)
})