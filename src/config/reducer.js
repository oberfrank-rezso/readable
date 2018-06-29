import { combineReducers } from 'redux';

import posts from 'shared/duck/PostReducer';
import categories from 'shared/duck/CategoryReducer';
import loading from 'shared/duck/LoadingReducer';
import comments from 'views/Single/views/Comments/duck/CommentReducer';

export default combineReducers({
  posts,
  comments,
  categories,
  loading,
});
