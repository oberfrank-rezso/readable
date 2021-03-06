import {
  FETCH_POST_SUCCESS,
  FETCH_POSTS_SUCCESS,
  NEW_POST_SUCCESS,
  EDIT_POST_SUCCESS,
  REMOVE_POST_SUCCESS,
  UPVOTE_POST_SUCCESS,
  DOWNVOTE_POST_SUCCESS,
} from './postTypes';
import {
  PUBLISH_COMMENT_SUCCESS,
  REMOVE_COMMENT_SUCCESS,
} from './commentTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS: {
      const { posts } = action.payload;
      return posts.reduce((accumulator, post) => ({
        ...accumulator,
        [post.id]: post,
      }), state);
    }
    case FETCH_POST_SUCCESS:
    case NEW_POST_SUCCESS:
    case EDIT_POST_SUCCESS:
    case UPVOTE_POST_SUCCESS:
    case DOWNVOTE_POST_SUCCESS: {
      const { post } = action.payload;
      return {
        ...state,
        [post.id]: post,
      };
    }
    case REMOVE_POST_SUCCESS: {
      const { post } = action.payload;
      const { [post.id]: deletedPost, ...newState } = state;
      return newState;
    }
    case PUBLISH_COMMENT_SUCCESS: {
      const { comment } = action.payload;
      return {
        ...state,
        [comment.parentId]: {
          ...state[comment.parentId],
          commentCount: state[comment.parentId].commentCount + 1,
        },
      };
    }
    case REMOVE_COMMENT_SUCCESS: {
      const { comment } = action.payload;
      return {
        ...state,
        [comment.parentId]: {
          ...state[comment.parentId],
          commentCount: state[comment.parentId].commentCount - 1,
        },
      };
    }
    default: {
      return state;
    }
  }
};
