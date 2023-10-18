import { TOGGLE_BUTTON } from './actionTypes';

export const actionSetActiveBtn = (name) => {
  return { type: TOGGLE_BUTTON, name };
};
