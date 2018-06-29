import {
  ADD_POST,
  ADD_POSTS,
  EDIT_POST,
  REMOVE_POST,
  UPVOTE_POST,
  DOWNVOTE_POST,
} from '../constants';

import ReadableAPI from '../../api';

export const getAll = () => dispatch => (
  ReadableAPI.posts.getAll()
    .then(posts => (
      dispatch({
        type: ADD_POSTS,
        payload: {
          posts,
        },
      })
    ))
);

export const loadByCategory = category => dispatch => (
  ReadableAPI.posts.getAllByCategory(category).then(posts => (
    dispatch({
      type: ADD_POSTS,
      payload: {
        posts,
      },
    })
  ))
);

export const get = id => dispatch => (
  ReadableAPI.posts.get(id)
    .then(post => (
      dispatch({
        type: ADD_POST,
        payload: {
          post,
        },
      })
    ))
);

export const add = post => dispatch => (
  ReadableAPI.posts.add(post)
    .then(responsePost => (
      dispatch({
        type: ADD_POST,
        payload: {
          post: responsePost,
        },
      })
    ))
);


export const edit = post => (dispatch) => {
  ReadableAPI.posts.edit(post).then((responsePost) => {
    dispatch({
      type: EDIT_POST,
      payload: {
        post: responsePost,
      },
    });
  });
};

export const remove = id => (dispatch) => {
  ReadableAPI.posts.remove(id).then(() => {
    dispatch({
      type: REMOVE_POST,
      payload: {
        post: {
          id,
        },
      },
    });
  });
};

export const upvote = id => dispatch => (
  ReadableAPI.posts.post(id, 'upVote').then((post) => {
    dispatch({
      type: UPVOTE_POST,
      payload: {
        post,
      },
    });
  })
);

export const downvote = id => dispatch => (
  ReadableAPI.posts.post(id, 'downVote').then((post) => {
    dispatch({
      type: DOWNVOTE_POST,
      payload: {
        post,
      },
    });
  })
);

