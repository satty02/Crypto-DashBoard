// this is created to route the search result

import React from "react";
import { BrowserRouter as Router , Route , Routes } from "react-router-dom";
import CoinDetail from "./Components/Search/CoinDetail";
import App from "./App";

function Routing(){
    


    return(
        <Router>
              <Routes>
                <Route exact path="/" Component={App}/>
                <Route path = '/search' Component={CoinDetail}/>
              </Routes>
          </Router>
    )
}

export default Routing