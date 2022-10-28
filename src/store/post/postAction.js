import {URL_API} from '../../api/const';
import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {changePage} from './postsSlice';


export const postRequestAsync = createAsyncThunk(
  'posts/fetch',
  (newPage, {getState, dispatch}) => {
    let page = getState().post.page;
    if (newPage) {
      page = newPage;
      dispatch(changePage(page));
    }

    const token = getState().token.token;
    const after = getState().post.after;
    const loading = getState().post.loading;
    const isLast = getState().post.isLast;
    const data = getState().post.data;
    console.log(data);
    console.log(after, data);

    if (!token || loading || isLast) return;
    dispatch(loading());
    return axios(
      `${URL_API}/${page}?limit=10&${after ? `after=${after}` : ''}`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
      .then(({data: {data}}) => {
        let posts = data.children;
        console.log(after);
        console.log(posts);
        if (after) {
          posts = [...data, ...posts];
        }
        return {data: posts, after: data.after, page};
      })
      .catch((error) => ({error: error.toString()}));
  });
