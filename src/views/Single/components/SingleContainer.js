import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Loader from 'react-loader';

import FourOhFour from 'shared/components/FourOhFour';

import * as CategoryActionCreatores from 'shared/duck/CategoryActions';
import * as PostActionCreators from 'shared/duck/PostActions';

import SinglePage from './Single';

class SinglePageContainer extends React.Component {
  state = {
    loaded: false,
  };

  componentDidMount = () => {
    const {
      postActions, categoryActions,
      postId,
    } = this.props;

    Promise.all([
      categoryActions.getAll(),
      postActions.get(postId),
    ]).finally(() => {
      this.setState({ loaded: true });
    });
  };

  render = () => {
    const { loaded } = this.state;
    const {
      post, postActions,
      category, invalidCategory,
    } = this.props;

    const invalidPost = post === undefined || category !== post.category;
    if (invalidCategory || invalidPost) {
      return <FourOhFour />;
    }

    return (
      <Loader loaded={loaded}>
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
    postId,

    categories: state.categories,
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SinglePageContainer);
