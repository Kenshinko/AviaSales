import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { nanoid } from 'nanoid';

import { actionGetSearchId, actionGetTickets } from '../../actions/ticketsActions';
import Ticket from '../Ticket';

import style from './TicketsLists.module.scss';

export default function TicketsLists() {
  const {
    searchId,
    isAllReceived,
    list: ticketsList,
    displayedTicketCount,
  } = useSelector(({ tickets }) => tickets);

  const displayedTickets = ticketsList.slice(0, displayedTicketCount);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionGetSearchId());
  }, []);

  useEffect(() => {
    if (!searchId) return;
    if (!isAllReceived) {
      dispatch(actionGetTickets(searchId));
    }
  });

  const renderTickets = (ticketsList) => {
    return ticketsList.map((ticket) => {
      return <Ticket key={nanoid()} {...ticket} />;
    });
  };

  return (
    <div className={style['content__ticketsList']}>{renderTickets(displayedTickets)}</div>
  );
}
