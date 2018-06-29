/* globals fetch:true localStorage:true */

const api = 'http://localhost:3001';

let token = localStorage.getItem('readable:token');
if (!token) {
  token = Math.random().toString(36).substr(-8);
  localStorage.setItem('readable:token', token);
}

const headers = { Accept: 'application/json', Authorization: token };

export const CategoryAPI = {
  getAll: () => (
    fetch(`${api}/categories`, { headers })
      .then(res => res.json())
  ),
};

export const PostsAPI = {
  getAll: () => (
    fetch(`${api}/posts`, { headers })
      .then(res => res.json())
  ),
  getAllByCategory: category => (
    fetch(`${api}/${category}/posts`, { headers })
      .then(res => res.json())
  ),
  get: id => (
    fetch(`${api}/posts/${id}`, { headers })
      .then(res => res.json())
  ),
  remove: id => (
    fetch(`${api}/posts/${id}`, {
      method: 'DELETE',
      headers,
    }).then(res => res.json())
  ),
  upvote: id => (
    fetch(`${api}/posts/${id}`, {
      method: 'POST',
      body: JSON.stringify({ option: 'upVote' }),
      headers: {
        ...headers,
        'Content-Type': 'application/json',
      },
    }).then(res => res.json())
  ),
  downvote: id => (
    fetch(`${api}/posts/${id}`, {
      method: 'POST',
      body: JSON.stringify({ option: 'downVote' }),
      headers: {
        ...headers,
        'Content-Type': 'application/json',
      },
    }).then(res => res.json())
  ),
  edit: post => (
    fetch(`${api}/posts/${post.id}`, {
      method: 'PUT',
      body: JSON.stringify({ title: post.title, body: post.body }),
      headers: {
        ...headers,
        'Content-Type': 'application/json',
      },
    }).then(res => res.json())
  ),
  add: post => (
    fetch(`${api}/posts`, {
      method: 'POST',
      body: JSON.stringify(post),
      headers: {
        ...headers,
        'Content-Type': 'application/json',
      },
    }).then(res => res.json())
  ),
};

export const CommentsAPI = {
  getAllForPost: id => (
    fetch(`${api}/posts/${id}/comments`, { headers })
      .then(res => res.json())
  ),
  add: comment => (
    fetch(`${api}/comments`, {
      method: 'POST',
      body: JSON.stringify(comment),
      headers: {
        ...headers,
        'Content-Type': 'application/json',
      },
    }).then(res => res.json())
  ),
  edit: comment => (
    fetch(`${api}/comments/${comment.id}`, {
      method: 'PUT',
      body: JSON.stringify({
        body: comment.body,
        timestamp: comment.timestamp,
      }),
      headers: {
        ...headers,
        'Content-Type': 'application/json',
      },
    }).then(res => res.json())
  ),
  upvote: id => (
    fetch(`${api}/comments/${id}`, {
      method: 'POST',
      body: JSON.stringify({ option: 'upVote' }),
      headers: {
        ...headers,
        'Content-Type': 'application/json',
      },
    }).then(res => res.json())
  ),
  downvote: id => (
    fetch(`${api}/comments/${id}`, {
      method: 'POST',
      body: JSON.stringify({ option: 'downVote' }),
      headers: {
        ...headers,
        'Content-Type': 'application/json',
      },
    }).then(res => res.json())
  ),
  remove: id => (
    fetch(`${api}/comments/${id}`, {
      method: 'DELETE',
      headers,
    }).then(res => res.json())
  ),
};
