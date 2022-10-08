import React from 'react';
import ReactDOM from 'react-dom/client';
import { legacy_createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './redux/reducers/reducers';
import './fireBase';
import App from './App';
import './index.css';

const store = legacy_createStore(reducers, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
