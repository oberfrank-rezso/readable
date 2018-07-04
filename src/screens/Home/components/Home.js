import React from 'react';

import Button from 'shared/components/Button';
import Dropdown from 'shared/components/Dropdown';
import Posts from './Posts';

import { createSortByPropertyFunction, sortingOptions } from '../utils/sortUtils';

const Home = ({
  title, posts, actions, categories, category, allPosts, sort,
  handleCategoryChange, handleSortChange,
}) => (
  <div className="posts-page">
    <h1 className="home-title">{title}</h1>
    <div className="home-control">
      <Button text="New post" onClick={actions.openNew} />
      <div className="dropdowns">
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
          value={category}
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
    </div>
    <Posts
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
