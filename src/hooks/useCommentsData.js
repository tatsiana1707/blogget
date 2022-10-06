import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {URL_API} from '../api/const';
import {updateToken} from '../store';


export const useCommentsData = (id) => {
  const token = useSelector(state => state.token);
  const dispatch = useDispatch();
  const [postData, setCommentsData] = useState({});
  const [isLoading, setLoading] = useState(false);
  console.log(id);
  dispatch(updateToken(token));
  useEffect(() => {
    if (!token) return;
    fetch(`${URL_API}/comments/${id}`, {
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
      .then(
        ([
          {
            data: {
              children: [{data: post}],
            },
          },
          {
            data: {
              children,
            },
          },
        ]) => {
          const comments = children.map(item => item.data);
          setCommentsData({post, comments});
          setLoading(true);
          console.log(post, comments, 'comments');
        },
      )
      .catch((err) => {
        console.error(err);
      });
  }, [token]);
  console.log(postData, 'post');
  return [postData, isLoading];
};
