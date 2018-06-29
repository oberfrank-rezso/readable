import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Loader from 'react-loader';

import FourOhFour from 'shared/components/FourOhFour';

import * as CategoryActionCreatores from 'shared/duck/CategoryActions';
import * as PostActionCreators from 'shared/duck/PostActions';
import * as LoadingActionCreators from 'shared/duck/LoadingActions';

import SinglePage from './Single';

class SinglePageContainer extends React.Component {
  componentDidMount = () => {
    const {
      postActions, categoryActions, loadingActions,
      postId,
    } = this.props;

    categoryActions.getAll();

    postActions.get(postId)
      .then(() => loadingActions.pop('single'));
  };

  componentWillUnmount = () => {
    const { loadingActions } = this.props;
    loadingActions.push('single');
  };

  render = () => {
    const {
      post, postLoaded, postActions,
      category, categoryLoaded, invalidCategory,
    } = this.props;

    const invalidURL = post === undefined || category !== post.category;
    if (invalidCategory || (postLoaded && invalidURL)) {
      return <FourOhFour />;
    }

    return (
      <Loader loaded={postLoaded && categoryLoaded}>
        <SinglePage
          post={post}
          actions={postActions}
        />
      </Loader>
    );
  };
}

const mapStateToProps = (state, ownProps) => {
  const { category, postId } = ownProps.match.params;
  const categoryLoaded = !state.loading.includes('categories');

  return ({
    post: state.posts.get(postId),
    postLoaded: !state.loading.includes('single'),
    postId,

    categories: state.categories,
    categoryLoaded,
    category,

    invalidCategory: (
      categoryLoaded &&
      !state.categories
        .map(el => el.path)
        .includes(category)
    ),
  });
};

const mapDispatchToProps = dispatch => ({
  categoryActions: bindActionCreators(CategoryActionCreatores, dispatch),
  postActions: bindActionCreators(PostActionCreators, dispatch),
  loadingActions: bindActionCreators(LoadingActionCreators, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SinglePageContainer);
