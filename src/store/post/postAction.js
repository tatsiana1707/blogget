import {URL_API} from '../../api/const';
import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {postsSlice} from './postsSlice';

export const postRequestAsync = createAsyncThunk(
  'posts/fetch',
  (newPage, {getState, dispatch}) => {
    let page = getState().post.page;
    if (newPage) {
      page = newPage;
      dispatch(postsSlice.actions.changePage(page));
    }

    const state = getState().post;
    const token = getState().token.token;
    const {data: posts, after, loading, isLast} = state;

    if (!page || loading || isLast) return state;
    dispatch(postsSlice.actions.loading());


    return axios(
      `${URL_API}/${page}?limit=10&${after ? `after=${after}` : ''}`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
      .then(({data: {data}}) => {
        if (after) {
          return {data: [...posts, ...data.children], after: data.after};
        }
        return {data: data.children, after: data.after};
      })
      .catch((error) => ({error: error.toString()}));
  });
