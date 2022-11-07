import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {postRequestAsync} from '../store/post/postAction';


export const usePost = page => {
  const data = useSelector(state => state.post.data);
  const token = useSelector(state => state.token.token);
  const loading = useSelector(state => state.post.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) return;
    dispatch(postRequestAsync(page));
  },
  [token]);

  return [data, loading];
};

