import { TOGGLE_BUTTON } from '../actions/actionTypes';

// ************** STATE ************** //
const btns = {
  btnsList: ['Самый дешевый', 'Самый быстрый', 'Оптимальный'],
  currentBtn: 'Самый дешевый',
};
// *********************************** //

export const buttonTabsReducer = (state = btns, action) => {
  switch (action.type) {
    case TOGGLE_BUTTON:
      return { ...btns, currentBtn: action.name };

    default:
      return state;
  }
};
