import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Loader from 'react-loader';
import qs from 'qs';

import * as PostActionCreators from '../redux/actions/posts';
import * as CategoryActionCreators from '../redux/actions/categories';

import { sortingOptions, isValidSort } from '../utils/sortUtils';

import PostPage from '../components/posts/PostPage';

class PostsPageContainer extends React.Component {
  componentDidMount = () => {
    this.props.postActions.getAll();
    this.props.categoryActions.getAll();
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
      categories, posts, location, match, postActions, categoriesAreLoaded,
    } = this.props;

    /* deal with category */
    const { category } = match.params;
    const isAllPosts = category === undefined;

    const categoryPaths = categories.map(el => el.path);
    const isInvalidCategory = !categoryPaths.includes(category);
    if (categoriesAreLoaded && !isAllPosts && isInvalidCategory) {
      return <Redirect to="/404" />;
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
        <PostPage
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
  categoriesAreLoaded: !state.loading.includes('categories'),
});

const mapDispatchToProps = dispatch => ({
  categoryActions: bindActionCreators(CategoryActionCreators, dispatch),
  postActions: bindActionCreators(PostActionCreators, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostsPageContainer);
