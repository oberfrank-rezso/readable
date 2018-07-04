import {
  FETCH_COMMENTS_SUCCESS,
  UPDATE_COMMENT_SUCCESS,
  REMOVE_COMMENT_SUCCESS,
  UPVOTE_COMMENT_SUCCESS,
  DOWNVOTE_COMMENT_SUCCESS,
  PUBLISH_COMMENT_SUCCESS,
} from './CommentTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_COMMENTS_SUCCESS: {
      const { comments } = action.payload;
      return comments.reduce((accumulator, comment) => ({
        ...accumulator,
        [comment.id]: comment,
      }), state);
    }
    case UPDATE_COMMENT_SUCCESS:
    case UPVOTE_COMMENT_SUCCESS:
    case DOWNVOTE_COMMENT_SUCCESS:
    case PUBLISH_COMMENT_SUCCESS: {
      const { comment } = action.payload;
      return {
        ...state,
        [comment.id]: comment,
      };
    }
    case REMOVE_COMMENT_SUCCESS: {
      const { comment } = action.payload;
      const { [comment.id]: deltedComment, ...newState } = state;
      return newState;
    }
    default: {
      return state;
    }
  }
};
