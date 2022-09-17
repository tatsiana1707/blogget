import style from './CurrentTime.module.css';
import formatDate from '../../../../../utils/formatDate';
import PropTypes from 'prop-types';

export const CurrentTime = ({date}) => {
  console.log(typeof(date), 'date');

  return (
    <time className={style.date}
      dateTime={date}>{formatDate(date)}</time>
  );
};

CurrentTime.propTypes = {
  date: PropTypes.string,
};
