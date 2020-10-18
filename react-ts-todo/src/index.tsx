import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import reducers from './reducer';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";

ReactDOM.render(
    <Provider store={createStore(reducers, applyMiddleware(thunk))}>
        <App/>
    </Provider>,
    document.getElementById('root')
);