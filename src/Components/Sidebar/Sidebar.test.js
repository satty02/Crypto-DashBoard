import React from "react";
import {render, waitFor} from '@testing-library/react';
import { Provider } from "react-redux";
import configureMockStore from 'redux-mock-store';
import thunk from "redux-thunk";
import renderer from 'react-test-renderer'

import CoinListAPI from "./CoinListAPI";
import { coinsListActions } from "../../State/Action"; 

const mockStore = configureMockStore([thunk]);

describe('MyAsyncComponent', ()=>{
    let store;
    let component;

    beforeEach(()=>{
        store = mockStore({
            myState : [],
        })

    component = renderer.create(
        <Provider store={store}>
            <CoinListAPI/>
        </Provider>
    )
    
    })
    it(`it should render the CoinListAPI component`,()=>{
        expect(component.toJSON()).toMatchSnapshot();
    })
    it(`it should dispatch an action to the coinListAction`,()=>{
        
    })
})

// jest.mock("axios",()=>{
//     __esModule:true,

//     default:{
//         get:()=>({
//             data:{id:1,name:john}
//         })
//     }
// })