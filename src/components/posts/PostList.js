import React from 'react';
import Post from './Post';

const PostList = ({
  posts = [],
  actions = {},
  filterFunction = () => true,
  sortFunction = () => true,
}) => (
  <div className="post-list">
    { posts
      .toSetSeq()
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

export default PostList;
