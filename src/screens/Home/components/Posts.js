import React from 'react';
import Post from 'shared/components/Post';

export default ({
  posts = {}, actions = {},
  filterFunction = () => true,
  sortFunction = () => true,
}) => (
  <div className="posts">
    { Object.values(posts).length === 0 ? (
      <p className="no-posts">
        <strong>No posts to show :(</strong><br />
        Add a new post in the upper left corner!
      </p>
    ) : (
      Object.values(posts)
        .filter(filterFunction)
        .sort(sortFunction)
        .map(post => (
          <Post
            key={`post-${post.id}`}
            post={post}
            actions={actions}
          />
        ))
    )}
  </div>
);
