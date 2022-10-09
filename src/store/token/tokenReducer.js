import {setToken} from '../../api/token';

const initialState = {
  token: '',
};

const UPDATE_TOKEN = 'UPDATE_TOKEN';
const DELETE_TOKENT = 'DELETE_TOKENT';


export const updateToken = token => ({
  type: UPDATE_TOKEN,
  token,
});

export const deleteToken = token => ({
  type: DELETE_TOKENT,
  token,
});

export const tokenMiddleware = store => next => (action) => {
  if (action.type === UPDATE_TOKEN) {
    setToken(action.token);
  }
  if (action.type === DELETE_TOKENT) {
    setToken('');
  }

  next(action);
};

export const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TOKEN:
      return {
        ...state,
        token: action.token,
      };

    case DELETE_TOKENT:
      return {
        ...state,
        token: '',
      };
    default:
      return state;
  }
};
