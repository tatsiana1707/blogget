import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {URL_API} from '../api/const';
import {updateToken} from '../store';

export const useFetch = () => {
  const [data, setContent] = useState({});
  const token = useSelector(state => state.token);
  const dispatch = useDispatch();

  dispatch(updateToken(token));
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

