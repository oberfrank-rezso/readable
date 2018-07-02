import { Map } from 'immutable';
import {
  EDIT_POST,

  FETCH_POST_SUCCESS,
  FETCH_POSTS_SUCCESS,
  REMOVE_POST_SUCCESS,
  UPVOTE_POST_SUCCESS,
  DOWNVOTE_POST_SUCCESS,
} from './PostTypes';

export default (state = Map(), action) => {
  switch (action.type) {
    case FETCH_POST_SUCCESS: {
      const { post } = action.payload;
      return state.set(post.id, post);
    }
    case FETCH_POSTS_SUCCESS: {
      const { posts } = action.payload;
      return posts.reduce((accumulator, post) => (
        accumulator.set(post.id, post)
      ), state);
    }
    case UPVOTE_POST_SUCCESS:
    case DOWNVOTE_POST_SUCCESS:
    case EDIT_POST: {
      const { post } = action.payload;
      return state.set(post.id, post);
    }
    case REMOVE_POST_SUCCESS: {
      const { post } = action.payload;
      return state.delete(post.id);
    }
    default: {
      return state;
    }
  }
};
