import {useState, useEffect, useContext} from 'react';
import {URL_API} from '../api/const';
import {tokenContext} from '../context/tokenContext';

export const useCommentsData = (id) => {
  const {token} = useContext(tokenContext);
  const [postData, setCommentsData] = useState({});
  console.log(id);
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
          setCommentsData([post, comments]);
          console.log(post, comments, 'comments');
        },
      )
      .catch((err) => {
        console.error(err);
        setCommentsData([]);
      });
  }, [token]);
  console.log(postData, 'post');
  return [postData];
};
