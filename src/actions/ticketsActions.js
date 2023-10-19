import { GET_SEARCHID, GET_TICKETS, GET_MORETICKETS } from './actionTypes';

const URL = 'https://aviasales-test-api.kata.academy';

export const actionGetSearchId = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL}/search`);
      const result = await response.json();
      dispatch({ type: GET_SEARCHID, data: result.searchId });
    } catch (error) {
      console.log(error);
    }
  };
};

export const actionGetTickets = (searchId) => {
  return (dispatch) => {
    const fetchTickets = async () => {
      try {
        const response = await fetch(`${URL}/tickets?searchId=${searchId}`);
        const result = await response.json();
        dispatch({ type: GET_TICKETS, data: result });
      } catch (error) {
        console.log(error);
        fetchTicketsInterval();
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

export const actionGetMoreTickets = () => {
  return { type: GET_MORETICKETS };
};
