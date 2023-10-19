import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { nanoid } from 'nanoid';

import {
  actionGetSearchId,
  actionFetchTickets,
  actionAwaitRepeatRequest,
} from '../../actions/ticketsActions';
import Ticket from '../Ticket';

import style from './TicketsLists.module.scss';

export default function TicketsLists() {
  const {
    searchId,
    isAllReceived,
    isError,
    list: ticketsList,
    displayedTicketCount,
  } = useSelector(({ tickets }) => tickets);

  const filters = useSelector(({ filters }) => filters);
  const currentBtn = useSelector(({ btns }) => btns.currentBtn);

  const dispatch = useDispatch();

  // Фильтрация билетов
  const filteredTickets = ticketsList.filter((ticket) => {
    // Применяем активные фильтры
    return filters.some((filter) => {
      if (filter.isActive) {
        // Показываем билеты для фильтра "Все"
        if (filter.id === 'all') return true;
        // Показываем билеты по количеству пересадок
        return ticket.segments.every((segment) => segment.stops.length === filter.value);
      }

      return false;
    });
  });

  // Сортировка билетов
  const sortedTickets = filteredTickets.slice(0, displayedTicketCount).sort((a, b) => {
    // Сортируем по цене (от самого дешевого к самому дорогому)
    if (currentBtn === 'Самый дешевый') {
      return a.price - b.price;
    }
    // Сортируем по длительности (от самого быстрого к самому медленному)
    if (currentBtn === 'Самый быстрый') {
      const durationA = a.segments.reduce((acc, segment) => acc + segment.duration, 0);
      const durationB = b.segments.reduce((acc, segment) => acc + segment.duration, 0);
      return durationA - durationB;
    }
    // Сортируем по количеству остановок
    const stopsA = a.segments.reduce((acc, segment) => acc + segment.stops.length, 0);
    const stopsB = b.segments.reduce((acc, segment) => acc + segment.stops.length, 0);
    return stopsA - stopsB;
  });

  useEffect(() => {
    dispatch(actionGetSearchId());
  }, []);

  useEffect(() => {
    if (!searchId) return;

    if (!isAllReceived && !isError) {
      dispatch(actionFetchTickets(searchId));
    }

    if (isError) {
      dispatch(actionAwaitRepeatRequest());
    }
  }, [sortedTickets]);

  const renderTickets = (ticketsList) => {
    return ticketsList.map((ticket) => {
      return <Ticket key={nanoid()} {...ticket} />;
    });
  };

  const hasFilters = () => {
    return filters.some((filter) => {
      if (filter.isActive) return true;
      return false;
    });
  };

  const blankTiket =
    !hasFilters() || ticketsList.length === 0 ? (
      <div className={style['ticketsList__blankItem']}>
        <p className={style['ticketsList__text']}>По указанным фильтрам ничего не найдено.</p>
      </div>
    ) : null;

  return (
    <div className={style['content__ticketsList']}>
      {blankTiket}
      {renderTickets(sortedTickets)}
    </div>
  );
}
