import { combineReducers } from 'redux';

import { filtersReducer } from './filtersReducer';
import { buttonTabsReducer } from './buttonTabsReducer';
import { ticketsReducer } from './ticketsReducer';

export const rootReducer = combineReducers({
  filters: filtersReducer,
  btns: buttonTabsReducer,
  tickets: ticketsReducer,
});
