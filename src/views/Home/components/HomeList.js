import React from 'react';
import Post from '../../../shared/components/Post';

const HomeList = ({
  posts = {},
  actions = {},
  filterFunction = () => true,
  sortFunction = () => true,
}) => (
  <div className="post-list">
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

export default HomeList;
