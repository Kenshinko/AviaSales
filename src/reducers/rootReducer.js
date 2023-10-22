import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { filtersReducer } from './filtersReducer';
import { buttonTabsReducer } from './buttonTabsReducer';
import { ticketsReducer } from './ticketsReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const rootReducer = combineReducers({
  filters: filtersReducer,
  btns: buttonTabsReducer,
  tickets: ticketsReducer,
});

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
