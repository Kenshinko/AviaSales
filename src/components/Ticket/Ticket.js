import { nanoid } from 'nanoid';
import { minutesToHours } from 'date-fns';

import { formatDataTime, getTransfers, getFormatedTime } from '../../utils';

import style from './Ticket.module.scss';

export default function Ticket({ price, carrier, segments }) {
  const infos = segments.map((info) => {
    const { date, destination, duration, origin, stops } = info;

    const departureDate = date;
    const arrivalDate = new Date(date).getTime() + duration * 60 * 1000;
    const flightTimeMins = duration % 60;
    const flightTimeHrs = minutesToHours(duration - flightTimeMins);

    return (
      <div className={style['ticket__infos']} key={nanoid()}>
        <div className={style['ticket__par']}>
          <span className={style['ticket__title']}>
            {origin} – {destination}
          </span>
          <span className={style['ticket__info']}>
            {getFormatedTime(departureDate)} – {getFormatedTime(arrivalDate)}
          </span>
        </div>
        <div className={style['ticket__par']}>
          <span className={style['ticket__title']}>В пути</span>
          <span className={style['ticket__info']}>
            {formatDataTime(flightTimeHrs, 'ч')} {formatDataTime(flightTimeMins, 'м')}
          </span>
        </div>
        <div className={style['ticket__par']}>
          <span className={style['ticket__title']}>{getTransfers(stops.length)}</span>
          <span className={style['ticket__info']}>{stops.join(', ')}</span>
        </div>
      </div>
    );
  });

  return (
    <div className={`${style['ticketsList__item']} ticket`}>
      <div className={style['ticket__par']}>
        <span className={style['ticket__price']}>{price.toLocaleString('ru')} Р</span>
      </div>
      <div className={style['ticket__par']}>
        <img
          className={style['ticket__img']}
          src={`https://pics.avs.io/110/36/${carrier}.png`}
          alt={`${carrier} company`}
        />
      </div>
      {infos}
    </div>
  );
}
