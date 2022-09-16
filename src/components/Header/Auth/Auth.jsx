import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as LoginIcon} from './img/login.svg';

export const Auth = ({auth}) => {
  console.log(style);
  return (
    <button className={style.button}>
      {auth ? auth : <LoginIcon/>
      }
    </button>
  );
};

Auth.propTypes = {
  auth: PropTypes.bool,
};


