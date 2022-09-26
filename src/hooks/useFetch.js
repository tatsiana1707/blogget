import {useState, useEffect} from 'react';
import {useContext} from 'react';
import {URL_API} from '../api/const';
import {postsContext} from './../context/postsContext';

export const useFetch = () => {
  const [content, setContent] = useState([]);
  const {data} = useContext(postsContext);


  useEffect(() => {
    if (!data) return;
    fetch(`${URL_API}/api/best`)
      .then(res => res.json())
      .then(data => {
        setContent([data]); console.log(data, 'res');
      })
      .catch(err => console.log(err));
  },
  []);
  return {content};
};

