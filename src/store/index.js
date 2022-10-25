import {tokenMiddleware, tokenReducer} from './token/tokenReducer';
import {commentReducer} from './comment/commentReducer';
import {authReducer} from './auth/authReducer';
import postReducer from './post/postsSlice';
import commentsDataReducer from './comments/commentsSlice';
import {configureStore} from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    comment: commentReducer,
    auth: authReducer,
    post: postReducer,
    comments: commentsDataReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tokenMiddleware),
});


