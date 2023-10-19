import {
  GET_SEARCHID,
  FETCH_TICKETS,
  GET_TICKETS,
  ERROR_ON,
  ERROR_OFF,
} from '../actions/actionTypes';

// ************** STATE ************** //
const tickets = {
  list: [],
  isAllReceived: false,
  isError: false,
  searchId: null,
  displayedTicketCount: 5,
};
// *********************************** //

export const ticketsReducer = (state = tickets, action) => {
  switch (action.type) {
    case GET_SEARCHID:
      return { ...state, searchId: action.data };

    case FETCH_TICKETS:
      return {
        ...state,
        list: [...state.list, ...action.data.tickets],
        isAllReceived: action.data.stop,
      };

    case GET_TICKETS:
      return { ...state, displayedTicketCount: state.displayedTicketCount + 5 };

    case ERROR_ON:
      return { ...state, isError: true };

    case ERROR_OFF:
      return { ...state, isError: false };

    default:
      return state;
  }
};
