import {useState, useEffect, useContext} from 'react';
import {URL_API} from '../api/const';
import {tokenContext} from '../context/tokenContext';


export const useFetch = () => {
  const [content, setContent] = useState({});
  const {token} = useContext(tokenContext);


  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/best`)
      .then((response) => {
        if (response.status === 401) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(data => {
        setContent(); console.log(data, 'res');
      })
      .catch((err) => {
        console.log(err);
        setContent([]);
      });
  },
  [token]);
  return [content];
};

