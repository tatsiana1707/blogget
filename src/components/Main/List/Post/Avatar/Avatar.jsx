import style from './Avatar.module.css';
import notphoto from '../img/notphoto.jpg';
import PropTypes from 'prop-types';

export const Avatar = ({title}) => (
  <img className={style.img} src={notphoto} alt={title} />
);

Avatar.propTypes = {
  title: PropTypes.string,
};

