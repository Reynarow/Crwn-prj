import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import ScrollToTopComponent from './Components/ScrollToTop/ScrollToTop.component';

import App from './App';

import './index.css';


import { store, persistor } from "./Redux/store";


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter >
            <PersistGate persistor={persistor}>
                <ScrollToTopComponent />
                <App />
            </PersistGate >
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

