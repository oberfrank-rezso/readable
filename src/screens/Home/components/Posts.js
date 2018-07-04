import React from 'react';
import Post from 'shared/components/Post';

export default ({
  posts = {}, actions = {},
  filterFunction = () => true,
  sortFunction = () => true,
}) => (
  <div className="posts">
    { Object.values(posts)
      .filter(filterFunction)
      .sort(sortFunction)
      .map(post => (
        <Post
          key={`post-${post.id}`}
          post={post}
          actions={actions}
        />
      ))
    }
  </div>
);
