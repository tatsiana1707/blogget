import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {commentsRequestAsync} from '../store/comments/commentsDataAction';


export const useCommentsData = (id) => {
  const token = useSelector(state => state.token.token);
  const dispatch = useDispatch();
  const data = useSelector(state => state.commentsData.data);
  const status = useSelector(state => state.commentsData.status);

  useEffect(() => {
    if (!token) return;
    dispatch(commentsRequestAsync(id));
  }, [token]);

  return [data, status];
};
