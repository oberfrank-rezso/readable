import React from 'react';
import { Link } from 'react-router-dom';

import Post from 'shared/components/Post';

import Comments from '../views/Comments';

const Single = ({ editing = false, post, actions }) => (
  <div className="single-page">
    <div className="back-to-homepage">
      <Link to="/">back to homepage</Link>
    </div>
    {editing ? (
      'editing'
    ) : (
      <Post
        post={post}
        actions={actions}
        single
      />
    )}
    <Comments postId={post.id} />
  </div>
);

export default Single;
