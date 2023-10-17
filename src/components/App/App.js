import FiltersList from '../FiltersList';
import FiltersBtns from '../FiltersBtns';
import TicketsLists from '../TicketsLists';
import logo from '../../assets/logo.png';

import style from './App.module.scss';

export default function App() {
  return (
    <div className={style['app']}>
      <header className={style['header']}>
        <img className={style['header__logo']} src={logo} alt={'Aviasales'} />
      </header>
      <main className={style['main']}>
        <aside className={style['sidebar']}>
          <FiltersList />
        </aside>
        <section className={style['content']}>
          <FiltersBtns />
          <TicketsLists />
          <button className={style['content__addTicketsBtn']}>Показать еще 5 билетов!</button>
        </section>
      </main>
    </div>
  );
}
