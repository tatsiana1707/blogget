import style from './CurrentTime.module.css';
import formatDate from '../../../../../utils/formatDate';
import PropTypes from 'prop-types';

export const CurrentTime = (props) => {
  console.log(typeof(date), props.date, 'date');

  return (
    <time className={style.date}
      dateTime={props.date}>{formatDate(props.date)}</time>
  );
};

CurrentTime.propTypes = {
  date: PropTypes.string,
};
