import {URL_API} from '../../api/const';
import axios from 'axios';
import {postsSlice} from './postsSlice';


export const postRequestAsync = (newPage) => (dispatch, getState) => {
  let page = getState().post.page;
  if (newPage) {
    page = newPage;
    console.log(page);
    dispatch(postsSlice.actions.changePage(page));
  }

  const token = getState().token.token;
  const after = getState().post.after;
  const loading = getState().post.loading;
  const isLast = getState().post.isLast;
  const data = getState().post.data;
  console.log(data);
  console.log(after, data);

  if (!token || loading || isLast) return;
  dispatch(postsSlice.actions.postRequest());

  axios(`${URL_API}/${page}?limit=10&${after ? `after=${after}` : ''}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then(({data: {data}}) => {
      console.log(data.children);
      console.log(data);
      if (after) {
        console.log(after);
        dispatch(
          postsSlice.actions.postRequestSuccessAfter(
            {data}));
        console.log(data);
      } else {
        dispatch(postsSlice.actions.postRequestSuccess({data}));
        console.log(data);
      }
    })
    .catch((err) => {
      dispatch(postsSlice.actions.postRequestError(err.toString()));
    });
};
