import { PostsAPI } from 'shared/api';

import {
  ADD_POST,
  ADD_POSTS,
  EDIT_POST,
  REMOVE_POST,
  UPVOTE_POST,
  DOWNVOTE_POST,
} from './PostTypes';


export const getAll = () => dispatch => (
  PostsAPI.getAll().then(posts => (
    dispatch({
      type: ADD_POSTS,
      payload: {
        posts,
      },
    })
  ))
);

export const loadByCategory = category => dispatch => (
  PostsAPI.getAllByCategory(category).then(posts => (
    dispatch({
      type: ADD_POSTS,
      payload: {
        posts,
      },
    })
  ))
);

export const get = id => dispatch => (
  PostsAPI.get(id).then(post => (
    dispatch({
      type: ADD_POST,
      payload: {
        post,
      },
    })
  ))
);

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

export const remove = id => dispatch => (
  PostsAPI.remove(id).then(() => {
    dispatch({
      type: REMOVE_POST,
      payload: {
        post: {
          id,
        },
      },
    });
  })
);

export const upvote = id => dispatch => (
  PostsAPI.upvote(id).then((post) => {
    dispatch({
      type: UPVOTE_POST,
      payload: {
        post,
      },
    });
  })
);

export const downvote = id => dispatch => (
  PostsAPI.downvote(id).then((post) => {
    dispatch({
      type: DOWNVOTE_POST,
      payload: {
        post,
      },
    });
  })
);
