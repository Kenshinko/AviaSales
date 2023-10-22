import {
  GET_SEARCHID,
  FETCH_TICKETS,
  GET_TICKETS,
  RENDER_LIST,
  ERROR_ON,
  ERROR_OFF,
} from './actionTypes';

const URL = 'https://aviasales-test-api.kata.academy';

export const actionGetSearchId = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL}/search`);
      const result = await response.json();
      dispatch({ type: GET_SEARCHID, data: result.searchId });
    } catch (error) {
      dispatch({ type: ERROR_ON, data: error });
    }
  };
};

export const actionFetchTickets = (searchId, isAllReceived, isError) => {
  return (dispatch) => {
    const fetchTickets = async () => {
      try {
        if (isAllReceived) return;

        const response = await fetch(`${URL}/tickets?searchId=${searchId}`);
        const result = await response.json();
        dispatch({ type: FETCH_TICKETS, data: result });

        if (!isAllReceived && !isError) {
          fetchTicketsInterval();
        }
      } catch (error) {
        dispatch({ type: ERROR_ON, data: error });
      }
    };

    const fetchTicketsInterval = () => {
      setTimeout(async () => {
        await fetchTickets();
      }, 2000);
    };

    fetchTicketsInterval();
  };
};

export const actionAwaitRepeatRequest = () => {
  return (dispatch) => {
    const awaitFetchTry = () => {
      setTimeout(() => {
        dispatch({ type: ERROR_OFF });
      }, 2500);
    };

    awaitFetchTry();
  };
};

export const actionGetTickets = () => ({ type: GET_TICKETS });
export const actionRenderList = (currentBtn, currentFilters, filter) => {
  const { id, value } = filter;

  return {
    type: RENDER_LIST,
    currentBtn,
    currentFilters,
    id,
    value,
  };
};
