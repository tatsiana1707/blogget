import style from './Auth.module.css';
import {useState, useContext} from 'react';
import PropTypes from 'prop-types';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {authContext} from '../../../context/authContext';
import {useDispatch, useSelector} from 'react-redux';
import {deleteToken} from '../../../store';


export const Auth = () => {
  const {auth, clearAuth} = useContext(authContext);
  const [isShown, setIsShown] = useState(true);
  const token = useSelector(state => state.token);
  const dispatch = useDispatch();


  const toggle = (e) => {
    setIsShown(!isShown);
  };

  const logout = (e) => {
    dispatch(deleteToken(token));
    clearAuth();
  };

  return (
    <div className={style.container}>
      {auth.name ? (
        <>
          <button className={style.btn} onClick={toggle}>
            <img className={style.img}
              src={auth.img} title={auth.name} alt={`Аватар ${auth.name}`} />
          </button>
          {!isShown && (
            <button className={style.logout}
              onClick={logout}>Выйти</button>
          )}
        </>
        ) : (
      <Text className={style.authLink} As='a' href={urlAuth}>
        <LoginIcon
          color='var(--orange)'
          width= '100%'
          height= '100%'
        />
      </Text>
      )}
    </div>
  );
};

Auth.propTypes = {
  token: PropTypes.string,
};


