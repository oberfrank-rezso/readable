import { combineReducers } from 'redux';

import posts from './posts';
import comments from './comments';
import categories from './categories';
import loading from './loading';

export default combineReducers({
  posts,
  comments,
  categories,
  loading,
});
