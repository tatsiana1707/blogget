import style from './Avatar.module.css';
import notphoto from '../img/notphoto.jpg';
import PropTypes from 'prop-types';
import {useState} from 'react';

export const Avatar = ({title, thumbnail}) => {
  const [showImage, setShowImage] = useState(true);
  const hideImg = (event) => {
    setShowImage(false);
  };
  return (
    <>
      {showImage ? (
        <img className={style.img}
          src={thumbnail} alt={title} onError={hideImg} />
      ) : (
        <img className={style.img}
          src={notphoto} alt={title} />
      )}
    </>
  );
};

Avatar.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
};

