import {useState, useEffect, useContext} from 'react';
import {tokenContext} from '../context/tokenContext';

export const useToken = () => {
  const [token, setToken] = useState('');
  const {delToken} = useContext(tokenContext);


  useEffect(() => {
    if (location.pathname.includes('/auth')) {
      const token = new URLSearchParams(location.hash.substring(1))
        .get('access_token');
      setToken(token);
    }

    if (localStorage.getItem('bearer')) {
      setToken(localStorage.getItem('bearer'));
    }
  }, []);

  useEffect(() => {
    if (token) {
      localStorage.setItem('bearer', token);
    }
  }, [token]);

  useEffect(() => {
    if (delToken) {
      setToken(localStorage.removeItem('bearer'));
    }
  }, [delToken]);


  return [token, delToken];
};
