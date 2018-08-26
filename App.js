import React from 'react';
import RootStack from './app/routes';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk'
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import rootReducer from './modules';

const client = axios.create({
  baseURL: '104.181.173.219:5000',
});

const middlewares = [axiosMiddleware(client), thunk];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default class App extends React.Component {
  render() {
    return (
    <Provider store={store}>
      <RootStack />
    </Provider>
    )
  }
}
