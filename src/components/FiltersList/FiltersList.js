import { connect } from 'react-redux';

import { actionToggleFilter } from '../../actions/filtersActions';

import style from './FiltersList.module.scss';

function FiltersList(props) {
  const { filtersList, toggleFilter } = props;

  const filters = (list) => {
    return list.map((filter) => {
      return (
        <li key={filter.id} className={`${style['filters__item']} item`}>
          <input
            className={style['item__checkbox']}
            type="checkbox"
            id={filter.id}
            checked={filter.isActive}
            onChange={() => toggleFilter(filter.id, filter.isActive)}
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
      <ul className={style['filters__list']}>{filters(filtersList)}</ul>
    </div>
  );
}

const mapStateToProps = ({ filters }) => {
  return {
    filtersList: filters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFilter: (id, isActive) => {
      dispatch(actionToggleFilter(id, isActive));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FiltersList);
