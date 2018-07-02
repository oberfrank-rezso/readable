import { PostsAPI } from 'shared/api';

import {
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,

  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,

  UPDATE_POST_REQUEST,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_FAILURE,

  REMOVE_POST_REQUEST,
  REMOVE_POST_SUCCESS,
  REMOVE_POST_FAILURE,

  UPVOTE_POST_REQUEST,
  UPVOTE_POST_SUCCESS,
  UPVOTE_POST_FAILURE,

  DOWNVOTE_POST_REQUEST,
  DOWNVOTE_POST_SUCCESS,
  DOWNVOTE_POST_FAILURE,

  PUBLISH_POST_REQUEST,
  PUBLISH_POST_SUCCESS,
  PUBLISH_POST_FAILURE,
} from './PostTypes';

export const get = id => (dispatch) => {
  dispatch({
    type: FETCH_POST_REQUEST,
    payload: {
      post: {
        id,
      },
    },
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
    post: {
      id,
    },
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
    payload: {
      category,
    },
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

export const update = post => (dispatch) => {
  dispatch({
    type: UPDATE_POST_REQUEST,
    post: {
      id: post.id,
    },
  });
  PostsAPI.update(post).then(responsePost => (
    dispatch({
      type: UPDATE_POST_SUCCESS,
      payload: {
        post: responsePost,
      },
    })
  )).catch(error => (
    dispatch({
      type: UPDATE_POST_FAILURE,
      payload: {
        error,
      },
    })
  ));
};

export const upvote = id => (dispatch) => {
  dispatch({
    type: UPVOTE_POST_REQUEST,
    post: {
      id,
    },
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
    post: {
      id,
    },
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

export const publish = post => (dispatch) => {
  dispatch({
    type: PUBLISH_POST_REQUEST,
    post: {
      id: post.id,
    },
  });
  return PostsAPI.publish(post).then(responsePost => (
    dispatch({
      type: PUBLISH_POST_SUCCESS,
      payload: {
        post: responsePost,
      },
    })
  )).catch(error => (
    dispatch({
      type: PUBLISH_POST_FAILURE,
      payload: {
        error,
      },
    })
  ));
};
