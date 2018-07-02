import { CommentsAPI } from 'shared/api';

import {
  ADD_COMMENT,
  ADD_COMMENTS,
  UPDATE_COMMENT,
  UPVOTE_COMMENT,
  DOWNVOTE_COMMENT,
  REMOVE_COMMENT,
} from './CommentTypes';

export const add = comment => dispatch => (
  CommentsAPI.add(comment).then(res => (
    dispatch({
      type: ADD_COMMENT,
      payload: {
        comment: res,
      },
    })
  ))
);

export const edit = comment => dispatch => (
  CommentsAPI.edit(comment).then(resComment => (
    dispatch({
      type: UPDATE_COMMENT,
      payload: {
        comment: resComment,
      },
    })
  ))
);

export const upvote = id => dispatch => (
  CommentsAPI.upvote(id).then(comment => (
    dispatch({
      type: UPVOTE_COMMENT,
      payload: {
        comment,
      },
    })
  ))
);

export const downvote = id => dispatch => (
  CommentsAPI.downvote(id).then(comment => (
    dispatch({
      type: DOWNVOTE_COMMENT,
      payload: {
        comment,
      },
    })
  ))
);

export const remove = id => dispatch => (
  CommentsAPI.remove(id).then(() => (
    dispatch({
      type: REMOVE_COMMENT,
      payload: {
        comment: {
          id,
        },
      },
    })
  ))
);

export const loadByPost = id => dispatch => (
  CommentsAPI.getAllForPost(id).then(comments => (
    dispatch({
      type: ADD_COMMENTS,
      payload: {
        comments,
      },
    })
  ))
);
