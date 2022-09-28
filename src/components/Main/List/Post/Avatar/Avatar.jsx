import style from './Avatar.module.css';
import notphoto from '../img/notphoto.jpg';
import PropTypes from 'prop-types';

export const Avatar = ({title, thumbnail}) => {
  console.log(thumbnail);

  return (
    <img className={style.img} src={thumbnail || notphoto}
      alt={title}/>
  );
};

Avatar.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
};

