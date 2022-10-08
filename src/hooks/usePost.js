import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {postRequestAsync} from '../store/action/postAction';
import {updateToken} from '../store/reducer/tokenReducer';

export const usePost = () => {
  const data = useSelector(state => state.post.data);
  const token = useSelector(state => state.token.token);
  const loading = useSelector(state => state.post.loading);
  const dispatch = useDispatch();

  dispatch(updateToken(token));
  useEffect(() => {
    if (!token) return;
    dispatch(postRequestAsync());
  },
  [token]);


  return [data, loading];
};

