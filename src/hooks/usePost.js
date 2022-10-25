import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {postRequestAsync} from '../store/action/postAction';


export const usePost = () => {
  const data = useSelector(state => state.post.data);
  const token = useSelector(state => state.token.token);
  const loading = useSelector(state => state.post.loading);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!token) return;
    dispatch(postRequestAsync());
  },
  [token]);

  console.log(data, loading);
  return [data, loading];
};

