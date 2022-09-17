import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as LoginIcon} from './img/login.svg';

export const Auth = ({auth}) => {
  console.log(style);
  return (
    <button className={style.button}>
      {auth ? auth :
      <LoginIcon
        color='var(--orange)'
        width= '100%'
        height= '100%'
      />
      }
    </button>
  );
};

Auth.propTypes = {
  auth: PropTypes.bool,
};


