import React from 'react';
import { Link } from 'react-router-dom';

import Post from './Post';
import CommentsContainer from '../../containers/CommentsContainer';

const SinglePage = ({
  post, actions,
}) => (
  <div className="single-page">
    <div className="back-to-homepage">
      <Link to="/">back to homepage</Link>
    </div>
    <Post
      post={post}
      actions={actions}
      single
    />
    <CommentsContainer postId={post.id} />
  </div>
);

export default SinglePage;
