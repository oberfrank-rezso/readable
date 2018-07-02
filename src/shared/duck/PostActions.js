import { PostsAPI } from 'shared/api';

import {
  ADD_POST,
  EDIT_POST,

  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,

  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,

  REMOVE_POST_REQUEST,
  REMOVE_POST_SUCCESS,
  REMOVE_POST_FAILURE,

  UPVOTE_POST_REQUEST,
  UPVOTE_POST_SUCCESS,
  UPVOTE_POST_FAILURE,

  DOWNVOTE_POST_REQUEST,
  DOWNVOTE_POST_SUCCESS,
  DOWNVOTE_POST_FAILURE,
} from './PostTypes';

export const get = id => (dispatch) => {
  dispatch({
    type: FETCH_POST_REQUEST,
  });
  return PostsAPI.get(id).then(post => (
    dispatch({
      type: FETCH_POST_SUCCESS,
      payload: {
        post,
      },
    })
  )).catch(error => (
    dispatch({
      type: FETCH_POST_FAILURE,
      payload: {
        error,
      },
    })
  ));
};

export const getAll = () => (dispatch) => {
  dispatch({
    type: FETCH_POSTS_REQUEST,
  });
  return PostsAPI.getAll().then(posts => (
    dispatch({
      type: FETCH_POSTS_SUCCESS,
      payload: {
        posts,
      },
    })
  )).catch(error => (
    dispatch({
      type: FETCH_POSTS_FAILURE,
      payload: {
        error,
      },
    })
  ));
};

export const remove = id => (dispatch) => {
  dispatch({
    type: REMOVE_POST_REQUEST,
  });
  return PostsAPI.remove(id).then(() => {
    dispatch({
      type: REMOVE_POST_SUCCESS,
      payload: {
        post: {
          id,
        },
      },
    });
  }).catch(error => (
    dispatch({
      type: REMOVE_POST_FAILURE,
      payload: {
        error,
      },
    })
  ));
};

export const loadByCategory = category => (dispatch) => {
  dispatch({
    type: FETCH_POSTS_REQUEST,
  });
  return PostsAPI.getAllByCategory(category).then(posts => (
    dispatch({
      type: FETCH_POSTS_SUCCESS,
      payload: {
        posts,
      },
    })
  )).catch(error => (
    dispatch({
      type: FETCH_POSTS_FAILURE,
      payload: {
        error,
      },
    })
  ));
};


export const add = post => dispatch => (
  PostsAPI.add(post).then(responsePost => (
    dispatch({
      type: ADD_POST,
      payload: {
        post: responsePost,
      },
    })
  ))
);


export const edit = post => dispatch => (
  PostsAPI.edit(post).then(responsePost => (
    dispatch({
      type: EDIT_POST,
      payload: {
        post: responsePost,
      },
    })
  ))
);

export const upvote = id => (dispatch) => {
  dispatch({
    type: UPVOTE_POST_REQUEST,
  });
  return PostsAPI.upvote(id).then(post => (
    dispatch({
      type: UPVOTE_POST_SUCCESS,
      payload: {
        post,
      },
    })
  )).catch(error => (
    dispatch({
      type: UPVOTE_POST_FAILURE,
      payload: {
        error,
      },
    })
  ));
};

export const downvote = id => (dispatch) => {
  dispatch({
    type: DOWNVOTE_POST_REQUEST,
  });
  return PostsAPI.downvote(id).then(post => (
    dispatch({
      type: DOWNVOTE_POST_SUCCESS,
      payload: {
        post,
      },
    })
  )).catch(error => (
    dispatch({
      type: DOWNVOTE_POST_FAILURE,
      payload: {
        error,
      },
    })
  ));
};
