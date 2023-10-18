import { TOGGLE_FILTER } from './actionTypes';

export const actionToggleFilter = (id, isActive) => {
  return { type: TOGGLE_FILTER, id, isActive };
};
