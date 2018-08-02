import React from 'react';

import { Grid, Menu, Dropdown, Button, Popup, Form } from 'semantic-ui-react';
import Posts from './Posts';

import { createSortByPropertyFunction, sortingOptions } from '../utils/sortUtils';

const Home = ({
  title, posts, actions, categories, category = 'all', allPosts, sort,
  handleCategoryChange, handleSortChange, isOpen = true,
}) => {
  return (
    <Grid container>
      <Grid.Column>
        <Menu stackable borderless>
          <Menu.Item>
            <span>Show me posts about&nbsp;</span>
            <Dropdown
              inline
              options={[{
                  text: 'anything',
                  value: 'all',
                },
                ...categories.map(el => ({
                  text: el.name,
                  value: el.path,
                })),
              ]}
              value={category}
              onChange={handleCategoryChange}
            />
            <span>sorted by&nbsp;</span>
            <Dropdown
              inline
              options={
                Object.keys(sortingOptions)
                  .map(key => ({
                    text: sortingOptions[key].name,
                    value: key,
                  }))
              }
              value={sort}
              onChange={handleSortChange}
            />
          </Menu.Item>

          <Menu.Menu position='right'>
            <Menu.Item>
              <Popup
                trigger={
                  <Form onSubmit={() => alert('Submitted!')}>
                    <Form.Input
                      placeholder='Choose a name...'
                      action={
                        <Button type='submit' icon='sign in'/>
                      }
                    />
                  </Form>
                }
                inverted
                content={`Min. length: 2 char`}
                on='focus'
                position='bottom left'
                size='tiny'
              />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <Posts
          posts={posts}
          actions={actions}
          sortFunction={createSortByPropertyFunction({
            property: sortingOptions[sort].property,
            isAscending: sortingOptions[sort].isAscending,
          })}
          filterFunction={
            post => allPosts || post.category === category
          }
        />
      </Grid.Column>
    </Grid>
  );
};

export default Home;
