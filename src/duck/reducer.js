import { combineReducers } from 'redux';

import posts from 'duck/PostReducer';
import categories from 'duck/CategoryReducer';
import comments from 'duck/CommentReducer';
import errorMessage from 'duck/ErrorMessageReducer';
import modal from 'duck/ModalReducer';

export default combineReducers({
  posts,
  comments,
  categories,
  errorMessage,
  modal,
});
