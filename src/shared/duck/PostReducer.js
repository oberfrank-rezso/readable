import { Map } from 'immutable';
import {
  ADD_POST,
  ADD_POSTS,
  EDIT_POST,
  REMOVE_POST,
  UPVOTE_POST,
  DOWNVOTE_POST,
} from './PostTypes';

export default (state = Map(), action) => {
  switch (action.type) {
    case ADD_POST: {
      const { post } = action.payload;
      return state.set(post.id, post);
    }
    case ADD_POSTS: {
      const { posts } = action.payload;
      return posts.reduce((accumulator, post) => (
        accumulator.set(post.id, post)
      ), state);
    }
    case UPVOTE_POST:
    case DOWNVOTE_POST:
    case EDIT_POST: {
      const { post } = action.payload;
      return state.set(post.id, post);
    }
    case REMOVE_POST: {
      const { post } = action.payload;
      return state.delete(post.id);
    }
    default: {
      return state;
    }
  }
};
