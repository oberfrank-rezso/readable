import React from 'react';

import Dropdown from 'shared/components/Dropdown';
import Header from 'shared/components/Header';
import HomePostList from './HomeList';

import { createSortByPropertyFunction, sortingOptions } from '../utils/sortUtils';

const Home = ({
  title, posts, actions, categories, category, allPosts, sort,
  handleCategoryChange, handleSortChange,
}) => (
  <div className="posts-page">
    <Header title={title} displayNew />
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
    <HomePostList
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

export default Home;
