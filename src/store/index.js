import {combineReducers, createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension';
import {tokenMiddleware, tokenReducer} from './token/tokenReducer';
import {commentReducer} from './comment/commentReducer';
import thunk from 'redux-thunk';
import {authReducer} from './auth/authReducer';
import {postReducer} from './post/postReducer';
import {commentsDataReducer} from './comments/commentsDataReducer';


const rootReducer = combineReducers({
  token: tokenReducer,
  comment: commentReducer,
  auth: authReducer,
  post: postReducer,
  commentsData: commentsDataReducer,
});


export const store = createStore(rootReducer,
  composeWithDevTools(applyMiddleware(tokenMiddleware, thunk)));
