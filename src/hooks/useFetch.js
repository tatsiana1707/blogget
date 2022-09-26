import {useState, useEffect} from 'react';
import {URL_API} from '../api/const';


export const useFetch = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    fetch(`${URL_API}/best`, {mode: 'cors'})
      .then((response) => {
        if (response.status === 401) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(data => {
        setContent([data]); console.log(data, 'res');
      })
      .catch((err) => {
        console.log(err);
        setContent();
      });
  },
  []);
  return [content];
};

