import React from 'react';

import Dropdown from '../common/Dropdown';
import Header from '../common/Header';
import PostList from './PostList';

import { createSortByPropertyFunction, sortingOptions } from '../../utils/sortUtils';

const PostPage = ({
  title, posts, actions, categories, category, allPosts, sort,
  handleCategoryChange, handleSortChange,
}) => (
  <div className="posts-page">
    <Header title={title} />
    <div className="dropdown-container">
      <Dropdown
        options={[{
            name: 'no filter',
            value: '',
          },
          ...categories.map(el => ({
            value: el.path,
            name: el.name,
          })),
        ]}
        defaultValue={category}
        onChange={handleCategoryChange}
      />
      <Dropdown
        options={
          Object.keys(sortingOptions)
            .map(key => ({
              name: sortingOptions[key].name,
              value: key,
            }))
        }
        defaultValue={sort}
        onChange={handleSortChange}
      />
    </div>
    <PostList
      posts={posts}
      actions={actions}
      sortFunction={createSortByPropertyFunction({
        property: sort.property,
        isAscending: sort.isAscending,
      })}
      filterFunction={
        post => allPosts || post.category === category
      }
    />
  </div>
);

export default PostPage;
