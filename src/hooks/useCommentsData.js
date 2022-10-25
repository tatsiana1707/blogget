import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {commentsRequestAsync} from '../store/comments/commentsDataAction';


export const useCommentsData = (id) => {
  const token = useSelector(state => state.token.token);
  const dispatch = useDispatch();
  const post = useSelector(state => state.comments.post);
  const comments = useSelector(state => state.comments.comments);
  const status = useSelector(state => state.comments.status);

  useEffect(() => {
    if (!token) return;
    dispatch(commentsRequestAsync(id));
  }, [token]);
  return [post, status, comments];
};
