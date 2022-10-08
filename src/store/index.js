import {combineReducers, createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension';
import {tokenMiddleware, tokenReducer} from './reducer/tokenReducer';
import {commentReducer} from './reducer/commentReducer';
import thunk from 'redux-thunk';
import {authReducer} from './reducer/authReducer';
import {postReducer} from './reducer/postReducer';
import {commentsDataReducer} from './reducer/commentsDataReducer';


const rootReducer = combineReducers({
  token: tokenReducer,
  comment: commentReducer,
  auth: authReducer,
  post: postReducer,
  commentsData: commentsDataReducer,
});


export const store = createStore(rootReducer,
  composeWithDevTools(applyMiddleware(tokenMiddleware, thunk)));
