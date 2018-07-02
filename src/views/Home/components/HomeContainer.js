import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Loader from 'react-loader';
import qs from 'qs';

import * as PostActionCreators from 'shared/duck/PostActions';
import * as CategoryActionCreators from 'shared/duck/CategoryActions';

import FourOhFour from 'shared/components/FourOhFour';
import FetchError from 'shared/components/FetchError';

import { sortingOptions, isValidSort } from '../utils/sortUtils';
import HomePage from './Home';

class HomeContainer extends React.Component {
  componentDidMount = () => {
    const { categoryActions, postActions } = this.props;

    categoryActions.getAll();
    postActions.getAll();
  };

  handleCategoryChange = (e) => {
    const path = e.target.value;
    const { search } = this.props.location;
    this.props.history.push({ pathname: `/${path}`, search });
  };

  handleSortChange = (e) => {
    const option = e.target.value;
    this.props.history.push({ search: `?sort=${option}` });
  };

  render = () => {
    const {
      categories, posts, location, match, postActions, categoryActions, categoriesAreLoaded, errorMessage,
    } = this.props;

    if (errorMessage) {
      return (
        <FetchError
          message={errorMessage}
          onRetry={() => {
            categoryActions.getAll();
            postActions.getAll();
          }}
        />
      );
    }

    /* deal with category */
    const { category } = match.params;
    const isAllPosts = category === undefined;

    const categoryPaths = categories.map(el => el.path);
    const isInvalidCategory = !categoryPaths.includes(category);
    if (categoriesAreLoaded && !isAllPosts && isInvalidCategory) {
      return <FourOhFour />;
    }
    /* deal with category */

    const defaultSort = 'dateDesc';
    const sortQuery = qs.parse(location.search.substring(1)).sort;
    const isValidSortQuery = isValidSort(sortQuery);

    const sort = isValidSortQuery ? (
      sortingOptions[sortQuery]
    ) : (
      sortingOptions[defaultSort]
    );

    if (!isValidSortQuery) {
      return <Redirect to={{ search: `?sort=${defaultSort}` }} />;
    }

    return (
      <Loader loaded={categoriesAreLoaded}>
        <HomePage
          title={`${category ? `'${category}'` : 'all'} posts`}
          sort={sort}

          posts={posts}
          allPosts={isAllPosts}
          actions={postActions}
          categories={categories}
          category={category}

          handleCategoryChange={this.handleCategoryChange}
          handleSortChange={this.handleSortChange}
        />
      </Loader>
    );
  };
}

const mapStateToProps = state => ({
  categories: state.categories,
  posts: state.posts,
  categoriesAreLoaded: !state.loading.includes('CATEGORIES'),
  errorMessage: state.errorMessage,
});

const mapDispatchToProps = dispatch => ({
  categoryActions: bindActionCreators(CategoryActionCreators, dispatch),
  postActions: bindActionCreators(PostActionCreators, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeContainer);
