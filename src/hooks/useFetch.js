import {useState} from 'react';
import {useEffect} from 'react';
import {URL_API} from '../api/const';

export const useFetch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!URL_API) return;
    const fetchData = async () => {
      const response = await fetch(`${URL_API}/api/best`);
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, [URL_API]);
  console.log(data);
  return {data};
};
