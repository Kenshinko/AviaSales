import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { nanoid } from 'nanoid';

import {
  actionGetSearchId,
  actionFetchTickets,
  actionAwaitRepeatRequest,
  actionRenderList,
} from '../../actions/ticketsActions';
import Ticket from '../Ticket';

import style from './TicketsLists.module.scss';

export default function TicketsLists() {
  const {
    searchId,
    isAllReceived,
    isError,
    list: ticketsList,
    displayedList,
    displayedTicketCount,
  } = useSelector(({ tickets }) => tickets);

  const currentBtn = useSelector(({ btns }) => btns.currentBtn);
  const { lastFilter, filtersList } = useSelector(({ filters }) => filters);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionGetSearchId());
  }, []);

  useEffect(() => {
    if (searchId && !isAllReceived && !isError) {
      dispatch(actionFetchTickets(searchId, isAllReceived, isError));
    }

    if (isError) {
      dispatch(actionAwaitRepeatRequest());
    }
  }, [searchId, isAllReceived, isError]);

  useEffect(() => {
    dispatch(actionRenderList(currentBtn, filtersList, lastFilter));
  }, [displayedTicketCount, currentBtn, filtersList, ticketsList]);

  const renderTickets = (ticketsList) => {
    return ticketsList.map((ticket) => {
      return <Ticket key={nanoid()} {...ticket} />;
    });
  };

  const hasFilters = () => {
    return filtersList.some((filter) => {
      if (filter.isActive) return true;
      return false;
    });
  };

  const blankList =
    !hasFilters() || ticketsList.length === 0 || displayedList.length === 0 ? (
      <div className={style['ticketsList__blankItem']}>
        <p className={style['ticketsList__text']}>По указанным фильтрам ничего не найдено.</p>
      </div>
    ) : null;

  const contentList = hasFilters() ? renderTickets(displayedList) : null;

  return (
    <div className={style['content__ticketsList']}>
      {blankList}
      {contentList}
    </div>
  );
}
