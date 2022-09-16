import style from './CurrentTime.module.css';
import formatDate from '../../../../../utils/fotmatDate';
import PropTypes from 'prop-types';

export const CurrentTime = ({date}) => {
  console.log(style);
  return (
    <time className={style.date} dateTime={date}>{formatDate(date)}</time>
  );
};

CurrentTime.propTypes = {
  date: PropTypes.string,
};
