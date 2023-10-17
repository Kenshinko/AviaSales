// import { useState } from 'react';

import style from './FiltersList.module.scss';

export default function FiltersList() {
  const possibleOptions = [
    'Все',
    'Без пересадок',
    '1 пересадка',
    '2 пересадки',
    '3 пересадки',
  ];
  // const defaultCheckedList = ['Без пересадок'];

  // const [checkedList, setCheckedList] = useState(defaultCheckedList);
  // const checkAll = possibleOptions.length === checkedList.length;
  // const indeterminate = checkedList.length > 0 && checkedList.length < possibleOptions.length;

  // const onChange = (list) => setCheckedList(list);

  // const onCheckAllChange = (e) => {
  //   setCheckedList(e.target.checked ? possibleOptions : []);
  // };

  const filters = (filtersList) => {
    return filtersList.map((filter) => {
      return (
        <li key={filter} className={`${style['filters__item']} item`}>
          <input className={style['item__checkbox']} type="checkbox" id={filter}></input>
          <label className={style['item__name']} htmlFor={filter}>
            {filter}
          </label>
        </li>
      );
    });
  };

  return (
    <div className={`${style['sidebar__filters']} filters`}>
      <h2 className={style['filters__title']}>Количество пересадок</h2>
      <ul className={style['filters__list']}>{filters(possibleOptions)}</ul>
    </div>
  );
}
