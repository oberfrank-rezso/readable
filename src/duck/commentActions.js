import { CommentsAPI } from 'api';

import {
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,

  UPDATE_COMMENT_REQUEST,
  UPDATE_COMMENT_SUCCESS,
  UPDATE_COMMENT_FAILURE,

  REMOVE_COMMENT_REQUEST,
  REMOVE_COMMENT_SUCCESS,
  REMOVE_COMMENT_FAILURE,

  UPVOTE_COMMENT_REQUEST,
  UPVOTE_COMMENT_SUCCESS,
  UPVOTE_COMMENT_FAILURE,

  DOWNVOTE_COMMENT_REQUEST,
  DOWNVOTE_COMMENT_SUCCESS,
  DOWNVOTE_COMMENT_FAILURE,

  PUBLISH_COMMENT_REQUEST,
  PUBLISH_COMMENT_SUCCESS,
  PUBLISH_COMMENT_FAILURE,
} from './commentTypes';

export const getByPost = id => (dispatch) => {
  dispatch({
    type: FETCH_COMMENTS_REQUEST,
    payload: {
      post: {
        id,
      },
    },
  });
  return CommentsAPI.getAllForPost(id).then(comments => (
    dispatch({
      type: FETCH_COMMENTS_SUCCESS,
      payload: {
        comments,
      },
    })
  )).catch(error => (
    dispatch({
      type: FETCH_COMMENTS_FAILURE,
      payload: {
        error,
      },
    })
  ));
};

export const remove = comment => (dispatch) => {
  const { id, parentId } = comment;
  dispatch({
    type: REMOVE_COMMENT_REQUEST,
    comment: {
      id,
    },
  });
  return CommentsAPI.remove(id).then(() => {
    dispatch({
      type: REMOVE_COMMENT_SUCCESS,
      payload: {
        comment: {
          parentId,
          id,
        },
      },
    });
  }).catch(error => (
    dispatch({
      type: REMOVE_COMMENT_FAILURE,
      payload: {
        error,
      },
    })
  ));
};

export const update = comment => (dispatch) => {
  dispatch({
    type: UPDATE_COMMENT_REQUEST,
    comment: {
      id: comment.id,
    },
  });
  return CommentsAPI.update(comment).then(responsePost => (
    dispatch({
      type: UPDATE_COMMENT_SUCCESS,
      payload: {
        comment: responsePost,
      },
    })
  )).catch(error => (
    dispatch({
      type: UPDATE_COMMENT_FAILURE,
      payload: {
        error,
      },
    })
  ));
};

export const upvote = id => (dispatch) => {
  dispatch({
    type: UPVOTE_COMMENT_REQUEST,
    comment: {
      id,
    },
  });
  return CommentsAPI.upvote(id).then(comment => (
    dispatch({
      type: UPVOTE_COMMENT_SUCCESS,
      payload: {
        comment,
      },
    })
  )).catch(error => (
    dispatch({
      type: UPVOTE_COMMENT_FAILURE,
      payload: {
        error,
      },
    })
  ));
};

export const downvote = id => (dispatch) => {
  dispatch({
    type: DOWNVOTE_COMMENT_REQUEST,
    comment: {
      id,
    },
  });
  return CommentsAPI.downvote(id).then(comment => (
    dispatch({
      type: DOWNVOTE_COMMENT_SUCCESS,
      payload: {
        comment,
      },
    })
  )).catch(error => (
    dispatch({
      type: DOWNVOTE_COMMENT_FAILURE,
      payload: {
        error,
      },
    })
  ));
};

export const publish = comment => (dispatch) => {
  dispatch({
    type: PUBLISH_COMMENT_REQUEST,
    comment: {
      id: comment.id,
    },
  });
  return CommentsAPI.publish(comment).then(responseComment => (
    dispatch({
      type: PUBLISH_COMMENT_SUCCESS,
      payload: {
        comment: responseComment,
      },
    })
  )).catch(error => (
    dispatch({
      type: PUBLISH_COMMENT_FAILURE,
      payload: {
        error,
      },
    })
  ));
};
