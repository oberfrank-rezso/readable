import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Loader from 'react-loader';
import qs from 'qs';

import * as PostActionCreators from 'duck/postActions';
import * as CategoryActionCreators from 'duck/categoryActions';

import FourOhFour from 'shared/components/FourOhFour';
import Error from 'shared/components/Error';

import { sortingOptions } from '../utils/sortUtils';
import HomePage from './Home';

class HomeContainer extends React.Component {
  state = {
    loaded: false,
  };

  componentDidMount = () => {
    this.getData();
  };

  getData = () => {
    const { categoryActions, postActions } = this.props;

    Promise.all([
      categoryActions.getAll(),
      postActions.getAll(),
    ]).finally(() => {
      this.setState({ loaded: true });
    });
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
    const { loaded } = this.state;
    if (!loaded) {
      return <Loader loaded={loaded} />;
    }

    const { errorMessage } = this.props;
    if (errorMessage) {
      return (
        <Error
          message={errorMessage}
          onReload={() => {
            this.setState({ loaded: false });
            this.getData();
          }}
        />
      );
    }

    const { categories } = this.props;
    const { category } = this.props.match.params;
    const isAllPosts = category === undefined;
    const isInvalidCategory = !categories.map(el => el.path).includes(category);
    if (loaded && !isAllPosts && isInvalidCategory) {
      return <FourOhFour />;
    }

    const { search } = this.props.location;
    const sortQuery = qs.parse(search.substring(1)).sort;
    const isValidSort = Object.keys(sortingOptions).includes(sortQuery);
    const sort = isValidSort ? sortQuery : 'dateDesc';

    const { posts, postActions } = this.props;
    return (
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
    );
  };
}

const mapStateToProps = ({ categories, posts, errorMessage }) => ({ categories, posts, errorMessage });

const mapDispatchToProps = dispatch => ({
  categoryActions: bindActionCreators(CategoryActionCreators, dispatch),
  postActions: bindActionCreators(PostActionCreators, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeContainer);
