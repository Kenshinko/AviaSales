import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import { actionSetActiveBtn } from '../../actions/btnsActions';

import style from './FiltersBtns.module.scss';

export default function FiltersBtns() {
  const { btnsList, currentBtn } = useSelector((state) => state.btns);
  const dispatch = useDispatch();

  const renderFilters = (filtersList) => {
    return filtersList.map((filterBtn) => {
      const btnClass = classNames(style['content__filterBtn'], {
        [style.active]: filterBtn === currentBtn,
      });

      return (
        <button
          className={btnClass}
          key={filterBtn}
          onClick={() => dispatch(actionSetActiveBtn(filterBtn))}
        >
          {filterBtn}
        </button>
      );
    });
  };

  return <div className={style['content__filtersBtns']}>{renderFilters(btnsList)}</div>;
}

const mapStateToProps = ({ btns }) => {
  const { currentBtn, btnsList } = btns;

  return {
    btnsList,
    currentBtn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSetActiveBtn: (name) => {
      dispatch(actionSetActiveBtn(name));
    },
  };
};
