import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//create globalized state:
import { createStore } from "redux";
// Je hoeft hier niet ./reducers/index.js te schrijven,  kijkt automatisch naar de index.js in reducers
import allReducer from './reducers'
// Provider connects our Store to our entire app
import {Provider} from 'react-redux'

const store = createStore(allReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);


