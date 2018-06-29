import {
  ADD_COMMENT,
  ADD_COMMENTS,
  UPDATE_COMMENT,
  REMOVE_COMMENT,
} from '../constants';

import ReadableAPI from '../../api';


export const add = comment => (dispatch) => {
  ReadableAPI.comments.add(comment).then((res) => {
    dispatch({
      type: ADD_COMMENT,
      payload: {
        comment: res,
      },
    });
  });
};

export const remove = id => (dispatch) => {
  ReadableAPI.comments.remove(id).then(() => {
    dispatch({
      type: REMOVE_COMMENT,
      payload: {
        comment: {
          id,
        },
      },
    });
  });
};

export const edit = comment => (dispatch) => {
  ReadableAPI.comments.edit(comment).then((resComment) => {
    dispatch({
      type: UPDATE_COMMENT,
      payload: {
        comment: resComment,
      },
    });
  });
};

export const upvote = id => (dispatch) => {
  ReadableAPI.comments.vote(id, 'upVote').then((comment) => {
    dispatch({
      type: UPDATE_COMMENT,
      payload: {
        comment,
      },
    });
  });
};

export const downvote = id => (dispatch) => {
  ReadableAPI.comments.vote(id, 'downVote').then((comment) => {
    dispatch({
      type: UPDATE_COMMENT,
      payload: {
        comment,
      },
    });
  });
};

export const loadByPost = id => dispatch => (
  ReadableAPI.comments.getAllForPost(id).then(comments => (
    dispatch({
      type: ADD_COMMENTS,
      payload: {
        comments,
      },
    })
  ))
);
