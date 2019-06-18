import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as bReducer } from '../pages/B/store';
import clientAxios from '../client/request';
import serverAxios from '../server/request';

const reducer = combineReducers({
  b: bReducer,
});

export const getServerStore = req => createStore(reducer, applyMiddleware(thunk.withExtraArgument(serverAxios(req))));

export const getClientStore = () => {
  const defaultState = window.context.state;
  return createStore(reducer, defaultState, applyMiddleware(thunk.withExtraArgument(clientAxios)));
};
