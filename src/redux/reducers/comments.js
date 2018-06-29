import { Map } from 'immutable';
import {
  ADD_COMMENT,
  ADD_COMMENTS,
  UPVOTE_COMMENT,
  DOWNVOTE_COMMENT,
  UPDATE_COMMENT,
  REMOVE_COMMENT,
} from '../constants';

export default (state = Map(), action) => {
  switch (action.type) {
    case ADD_COMMENT: {
      const { comment } = action.payload;
      return state.set(comment.id, comment);
    }
    case ADD_COMMENTS: {
      const { comments } = action.payload;
      return comments.reduce((accumulator, post) => (
        accumulator.set(post.id, post)
      ), state);
    }
    case UPVOTE_COMMENT:
    case DOWNVOTE_COMMENT:
    case UPDATE_COMMENT: {
      const { comment } = action.payload;
      return state.set(comment.id, comment);
    }
    case REMOVE_COMMENT: {
      const { comment } = action.payload;
      return state.delete(comment.id);
    }
    default: {
      return state;
    }
  }
};
