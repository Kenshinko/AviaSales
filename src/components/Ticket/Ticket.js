import style from './Ticket.module.scss';

export default function Ticket() {
  return (
    <div className={`${style['ticketsList__item']} ticket`}>
      <div className={style['ticket__par']}>
        <span className={style['ticket__price']}>13 400 Р</span>
      </div>
      <div className={style['ticket__par']}>
        <span className={style['ticket__img']}>Изображение</span>
      </div>
      <div className={style['ticket__par']}>
        <span className={style['ticket__title']}>MOW – HKT</span>
        <span className={style['ticket__info']}>10:45 – 08:00</span>
      </div>
      <div className={style['ticket__par']}>
        <span className={style['ticket__title']}>В пути</span>
        <span className={style['ticket__info']}>21ч 15м</span>
      </div>
      <div className={style['ticket__par']}>
        <span className={style['ticket__title']}>2 пересадки</span>
        <span className={style['ticket__info']}>HKG, JNB</span>
      </div>
      <div className={style['ticket__par']}>
        <span className={style['ticket__title']}>MOW – HKT</span>
        <span className={style['ticket__info']}>11:20 – 00:50</span>
      </div>
      <div className={style['ticket__par']}>
        <span className={style['ticket__title']}>В пути</span>
        <span className={style['ticket__info']}>13ч 30м</span>
      </div>
      <div className={style['ticket__par']}>
        <span className={style['ticket__title']}>1 пересадка</span>
        <span className={style['ticket__info']}>HKG</span>
      </div>
    </div>
  );
}
