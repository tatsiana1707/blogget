import {useEffect, useState} from 'react';
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {URL_API} from '../../../api/const';


export const Auth = ({token}) => {
  const [auth, setAuth] = useState({});
  const [isShown, setIsShown] = useState(true);

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      }
    })
      .then(response => response.json())
      .then(({name, icon_img: iconImg}) => {
        const img = iconImg.replace(/\?.*$/, '');
        setAuth({name, img});
      })
      .catch(err => {
        if (err.response.status === 401) {
          localStorage.clear();
          console.error(err);
        }
        console.error(err);
        setAuth({});
      });
  }, [token]);
  console.log(style);

  const toggle = (e) => {
    setIsShown(current => !current);
  };

  const deleteToken = (e) => {
    if (auth.name) {
      setAuth({});
      localStorage.clear();
    }
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
              onClick={deleteToken}>Выйти</button>
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


