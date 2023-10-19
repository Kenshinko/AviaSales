import { GET_SEARCHID, FETCH_TICKETS, GET_TICKETS, ERROR_ON, ERROR_OFF } from './actionTypes';

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

export const actionFetchTickets = (searchId) => {
  return (dispatch) => {
    const fetchTickets = async () => {
      try {
        const response = await fetch(`${URL}/tickets?searchId=${searchId}`);
        const result = await response.json();
        dispatch({ type: FETCH_TICKETS, data: result });
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

export const actionGetTickets = () => {
  return { type: GET_TICKETS };
};
