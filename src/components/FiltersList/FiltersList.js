import { useDispatch, useSelector } from 'react-redux';

import { actionToggleFilter } from '../../actions/filtersActions';

import style from './FiltersList.module.scss';

export default function FiltersList() {
  const filtersList = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  const renderFilters = (list) => {
    return list.map((filter) => {
      return (
        <li key={filter.id} className={`${style['filters__item']} item`}>
          <input
            className={style['item__checkbox']}
            type="checkbox"
            id={filter.id}
            checked={filter.isActive}
            onChange={() => dispatch(actionToggleFilter(filter.id, filter.isActive))}
          />
          <label className={style['item__name']} htmlFor={filter.id}>
            {filter.name}
          </label>
        </li>
      );
    });
  };

  return (
    <div className={`${style['sidebar__filters']} filters`}>
      <h2 className={style['filters__title']}>Количество пересадок</h2>
      <ul className={style['filters__list']}>{renderFilters(filtersList)}</ul>
    </div>
  );
}
