import React from "react";
import { fireEvent, render,screen } from "@testing-library/react";
import Search from "./Search";
import { useNavigate } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';


jest.mock('react-router-dom',()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate:jest.fn(),
}))

describe('SearchInput',()=>{

    const mockStore = configureStore();
    const initialState = 'bitcoin'


    test('render input fields',()=>{
        
        const navigateMock = jest.fn();
        useNavigate.mockReturnValue(navigateMock);

        const store = mockStore(initialState)

        const {getByPlaceholderText} = render(
        <Provider store = {store}>
            <Search/>
        </Provider>
);
        const input = screen.getByPlaceholderText('Search');

        fireEvent.change(input, {target:{value:'bitcoin'}});

        expect(navigateMock).toHaveBeenCalledWith(`/search?q=bitcoin`)

    })
})


