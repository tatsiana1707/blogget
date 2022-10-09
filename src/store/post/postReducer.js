import {POST_REQUEST,
  POST_REQUEST_ERROR,
  POST_REQUEST_SUCCESS,
  POST_REQUEST_SUCCESS_AFTER,
  CHANGE_PAGE,
} from './postAction';

const initialState = {
  loading: false,
  data: {},
  error: '',
  after: '',
  isLast: false,
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };

    case POST_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
        error: '',
        after: action.after,
        isLast: !action.after,
      };

    case POST_REQUEST_SUCCESS_AFTER:
      return {
        ...state,
        loading: false,
        data: [...state.data, ...action.data],
        error: '',
        after: action.after,
        isLast: !action.after,
      };

    case POST_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case CHANGE_PAGE:
      return {
        ...state,
        page: action.page,
        after: '',
        isLast: false,
      };

    default:
      return state;
  }
};
