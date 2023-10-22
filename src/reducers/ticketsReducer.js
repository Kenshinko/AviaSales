import {
  GET_SEARCHID,
  FETCH_TICKETS,
  GET_TICKETS,
  ERROR_ON,
  ERROR_OFF,
  RENDER_LIST,
} from '../actions/actionTypes';

// ************** STATE ************** //
const tickets = {
  list: [],
  displayedList: [],
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

    case RENDER_LIST: {
      const activeFilters = action.currentFilters
        .filter((filter) => filter.isActive)
        .map((filter) => filter.value);
      // Фильтруем по активным фильтрам

      const filteredTickets = state.list
        .filter((ticket) => {
          if (action.id === 'all') return true;

          const stopsThere = ticket.segments[0].stops.length;
          const stopsBack = ticket.segments[1].stops.length;
          return activeFilters.includes(stopsThere) && activeFilters.includes(stopsBack);
        })
        .sort((a, b) => {
          const stopsThereA = a.segments[0].stops.length;
          const stopsBackA = a.segments[1].stops.length;

          const stopsThereB = b.segments[0].stops.length;
          const stopsBackB = b.segments[1].stops.length;

          return stopsThereA + stopsBackA - stopsThereB + stopsBackB;
        });

      // Фильтруем по кнопкам
      const sortedTickets = filteredTickets
        .slice(0, state.displayedTicketCount)
        .sort((a, b) => {
          // Сортируем по цене (от самого дешевого к самому дорогому)
          if (action.currentBtn === 'Самый дешевый') {
            return a.price - b.price;
          }
          // Сортируем по длительности (от самого быстрого к самому медленному)
          if (action.currentBtn === 'Самый быстрый') {
            const durationA = a.segments.reduce((acc, segment) => acc + segment.duration, 0);
            const durationB = b.segments.reduce((acc, segment) => acc + segment.duration, 0);
            return durationA - durationB;
          }
          // Сортируем по количеству остановок
          const stopsA = a.segments.reduce((acc, segment) => acc + segment.stops.length, 0);
          const stopsB = b.segments.reduce((acc, segment) => acc + segment.stops.length, 0);
          return stopsA - stopsB;
        });

      return { ...state, displayedList: [...sortedTickets] };
    }

    default:
      return state;
  }
};
