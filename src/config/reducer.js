import { combineReducers } from 'redux';

import posts from 'shared/duck/PostReducer';
import categories from 'shared/duck/CategoryReducer';
import comments from 'shared/duck/CommentReducer';
import errorMessage from 'shared/duck/ErrorMessageReducer';

export default combineReducers({
  posts,
  comments,
  categories,
  errorMessage,
});
