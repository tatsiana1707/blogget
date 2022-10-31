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
    const data = getState().post.data;
    const after = getState().post.after;
    const loading = getState().post.loading;
    const isLast = getState().post.isLast;
    console.log(data);
    console.log(after, 'after');
    if (!token || loading || isLast) return;
    return axios(
      `${URL_API}/${page}?limit=10&${after ? `after=${after}` : ''}`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
      .then(({data: {data}}) => {
        let posts = data;
        const firstPosts = data.children;
        console.log(posts);
        console.log(after);
        console.log(posts);
        if (after) {
          posts = [...firstPosts, ...data];
          return {posts};
        }
        return {firstPosts, after: data.after, page};
      })
      .catch((error) => ({error: error.toString()}));
  });
