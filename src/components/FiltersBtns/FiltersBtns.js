import { useState } from 'react';
import classNames from 'classnames';

import style from './FiltersBtns.module.scss';

export default function FiltersBtns() {
  const possibleOptions = ['Самый дешевый', 'Самый быстрый', 'Оптимальный'];
  const defaultCheckedBtn = 'Самый дешевый';

  const [activeBtn, setActiveBtn] = useState(defaultCheckedBtn);

  const filters = (filtersList) => {
    return filtersList.map((filterBtn) => {
      const btnClass = classNames(style['content__filterBtn'], {
        [style.active]: filterBtn === activeBtn,
      });

      return (
        <button className={btnClass} key={filterBtn} onClick={() => setActiveBtn(filterBtn)}>
          {filterBtn}
        </button>
      );
    });
  };

  return <div className={style['content__filtersBtns']}>{filters(possibleOptions)}</div>;
}
