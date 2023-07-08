// in this component Exchange component is tested
import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { coinExchangeAction } from "../../State/Action/coinExchangeAction";
import ExchangeAPI from "./ExchangeAPI";
import { render } from "@testing-library/react";

jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch:jest.fn()
  }));
describe('ExchangeAPI', () => {
    
    test('fetches exchange rates and renders CurrencyConverter', async () => {
        const mockRates = { rates : {
            USD: {
                value: 1
            },
            EUR: {
                value: 0.85
            },
            GBP: {
                value: 0.72
            }
        }
    };

        const mockDispatch = jest.fn();
        
        useSelector.mockReturnValue(mockRates);
        useDispatch.mockReturnValue(mockDispatch);

        // mock the fetch request
        jest.spyOn(global,'fetch').mockResolvedValueOnce({
            ok:true,
            json:jest.fn().mockResolvedValueOnce(mockRates)
        })


        render (<ExchangeAPI/>);
    

    await new Promise(resolve=>setTimeout(resolve));
    expect(mockDispatch).toHaveBeenCalledWith(coinExchangeAction(mockRates.rates))

});

});
