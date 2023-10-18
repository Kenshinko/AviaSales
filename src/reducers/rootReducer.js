import { combineReducers } from 'redux';

import { filtersReducer } from './filtersReducer';
import { buttonTabsReducer } from './buttonTabsReducer';

export const rootReducer = combineReducers({
  filters: filtersReducer,
  btns: buttonTabsReducer,
});
