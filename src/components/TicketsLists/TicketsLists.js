import Ticket from '../Ticket';

import style from './TicketsLists.module.scss';

export default function TicketsLists() {
  return (
    <div className={style['content__ticketsList']}>
      <Ticket />
      <Ticket />
    </div>
  );
}
