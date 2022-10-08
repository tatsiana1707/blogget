import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {commentsRequestAsync} from '../store/action/commentsDataAction';
import {updateToken} from '../store/reducer/tokenReducer';


export const useCommentsData = (id) => {
  const token = useSelector(state => state.token.token);
  const dispatch = useDispatch();
  const data = useSelector(state => state.commentsData.data);
  const status = useSelector(state => state.commentsData.status);


  dispatch(updateToken(token));
  useEffect(() => {
    dispatch(commentsRequestAsync(id));
  }, [token]);

  return [data, status];
};
