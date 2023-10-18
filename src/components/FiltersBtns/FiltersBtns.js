import { connect } from 'react-redux';
import classNames from 'classnames';

import { actionSetActiveBtn } from '../../actions/btnsActions';

import style from './FiltersBtns.module.scss';

function FiltersBtns(props) {
  const { currentBtn, btnsList, handleSetActiveBtn } = props;

  const filters = (filtersList) => {
    return filtersList.map((filterBtn) => {
      const btnClass = classNames(style['content__filterBtn'], {
        [style.active]: filterBtn === currentBtn,
      });

      return (
        <button
          className={btnClass}
          key={filterBtn}
          onClick={() => handleSetActiveBtn(filterBtn)}
        >
          {filterBtn}
        </button>
      );
    });
  };

  return <div className={style['content__filtersBtns']}>{filters(btnsList)}</div>;
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

export default connect(mapStateToProps, mapDispatchToProps)(FiltersBtns);
