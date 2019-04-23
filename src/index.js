import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import App from './App';
import configureStore from '../src/store/store';

const Root = ({ store }) => {
    return (
        <Provider store={store}>
            <HashRouter>
                <App />
            </HashRouter>
        </Provider>
    )
}


document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});