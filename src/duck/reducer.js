import { combineReducers } from 'redux';

import posts from 'duck/postReducer';
import categories from 'duck/categoryReducer';
import comments from 'duck/commentReducer';
import errorMessage from 'duck/errorMessageReducer';
import modal from 'duck/modalReducer';

export default combineReducers({
  posts,
  comments,
  categories,
  errorMessage,
  modal,
});
