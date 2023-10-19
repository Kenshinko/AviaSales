import { GET_SEARCHID, GET_TICKETS, GET_MORETICKETS } from '../actions/actionTypes';

// ************** STATE ************** //
const tickets = {
  list: [],
  isAllReceived: false,
  searchId: null,
  displayedTicketCount: 5,
};
// *********************************** //

export const ticketsReducer = (state = tickets, action) => {
  console.log('ticketsReducer: ', action);

  switch (action.type) {
    case GET_SEARCHID:
      return { ...state, searchId: action.data };

    case GET_TICKETS:
      return {
        ...state,
        list: [...state.list, ...action.data.tickets],
        isAllReceived: action.data.stop,
      };

    case GET_MORETICKETS:
      return { ...state, displayedTicketCount: state.displayedTicketCount + 5 };

    default:
      return state;
  }
};
