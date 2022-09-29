import {useState, useEffect, useContext} from 'react';
import {URL_API} from '../api/const';
import {tokenContext} from '../context/tokenContext';


export const useFetch = () => {
  const [data, setContent] = useState({});
  const {token} = useContext(tokenContext);


  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/best`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.status === 401) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(data => {
        setContent([...data.data.children]);
      })
      .catch((err) => {
        console.log(err);
        setContent([]);
      });
  },
  [token]);
  return [data];
};

