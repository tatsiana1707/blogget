import {URL_API} from '../../api/const';
import axios from 'axios';

export const POST_REQUEST = 'POST_REQUEST';
export const POST_REQUEST_SUCCESS = 'POST_REQUEST_SUCCESS';
export const POST_REQUEST_ERROR = 'POST_REQUEST_ERROR';
export const POST_REQUEST_SUCCESS_AFTER = 'POST_REQUEST_SUCCESS_AFTER';
export const CHANGE_PAGE = 'CHANGE_PAGE';

export const postRequest = () => ({
  type: POST_REQUEST,
});

export const postRequestSuccess = (data) => ({
  type: POST_REQUEST_SUCCESS,
  data: data.children,
  after: data.after,
});

export const postRequestSuccessAfter = (data) => ({
  type: POST_REQUEST_SUCCESS_AFTER,
  data: data.children,
  after: data.after,
});

export const postRequestError = (error) => ({
  type: POST_REQUEST_ERROR,
  error,
});

export const changePage = (page) => ({
  type: CHANGE_PAGE,
  page,
});

export const postRequestAsync = (newPage) => (dispatch, getState) => {
  let page = getState().post.page;

  if (newPage) {
    page = newPage;
    dispatch(changePage(page));
  }

  const token = getState().token.token;
  const after = getState().post.after;
  const loading = getState().post.loading;
  const isLast = getState().post.isLast;

  if (!token || loading || isLast) return;
  dispatch(postRequest());

  axios(`${URL_API}/${page}?limit=10&${after ? `after=${after}` : ''}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then(({data}) => {
      if (after) {
        dispatch(postRequestSuccessAfter(data.data));
      } else {
        dispatch(postRequestSuccess(data.data));
      }
    })
    .catch((err) => {
      dispatch(postRequestError(err.toString()));
    });
};


