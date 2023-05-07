import { combineReducers } from "redux";
import {coinsListReducer} from "../Reducer/coinsListReducer";
import { coinsChartReducer } from "./coinsChartReducer";
import { coinsCurrencyReducer } from "./coinsCurrencyReducer";
import { CoinsdateReducer } from "./coinsDateReducer";
import { coinSelectionReducer } from "./CoinSelectionReducer";
import { chartSelectionReducer } from "./chartSelectionReducer";
import { chartDataReducer } from "./chartDataReducer";
import { coinExchangeReducer } from "./coinExchangeReducer";
import { chosenPrimaryReducer } from "./chosePrimaryReducer";
import { chosenSecondaryReducer } from "./choseSecondaryReducer";
import { resultAmountReducer } from "./resultAmountReducer";
import { amountQuantityReducer } from "./amountQuantityReducer";
import { coinSearchReducer } from "./coinSearchReducer";
import { coinSelectionReducer2 } from "./coinSelectionReducer2";
import { chartDataReducer2 } from "./chartDataReducer2";

const rootReducer = combineReducers({
    CoinCurrency : coinsCurrencyReducer,
    coinsData: coinsListReducer,
    coinsName: coinsChartReducer,
    coinsDate: CoinsdateReducer,
    coinSelect : coinSelectionReducer,
    chartSelect : chartSelectionReducer,
    chartData: chartDataReducer,
    coinExchange :coinExchangeReducer,
    primaryCoin : chosenPrimaryReducer,
    secondaryCoin : chosenSecondaryReducer,
    resultAmount : resultAmountReducer,
    amountQuantity : amountQuantityReducer,
    coinSearch : coinSearchReducer,
    coinselect2: coinSelectionReducer2,
    chartData2:chartDataReducer2
})

export default rootReducer;