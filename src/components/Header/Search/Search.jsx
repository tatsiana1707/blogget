import style from './Search.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as SearchIcon} from './img/search.svg';

export const Search = ({name}) => {
  console.log(style);
  return (
    <form className={style.form}>
      <input className={style.search} type="search" />
      <button className={style.button}>
        <SearchIcon/>
      </button>
    </form>
  );
};

Search.propTypes = {
  name: PropTypes.string,
};
