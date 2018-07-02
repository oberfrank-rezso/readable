import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Loader from 'react-loader';

import FourOhFour from 'shared/components/FourOhFour';
import FetchError from 'shared/components/FetchError';

import * as CategoryActionCreatores from 'shared/duck/CategoryActions';
import * as PostActionCreators from 'shared/duck/PostActions';

import SinglePage from './Single';

class SinglePageContainer extends React.Component {
  state = {
    loaded: false,
  };

  componentDidMount = () => {
    this.getData();
  };

  getData = () => {
    const { postId, postActions, categoryActions } = this.props;

    Promise.all([
      categoryActions.getAll(),
      postActions.get(postId),
    ]).finally(() => {
      this.setState({ loaded: true });
    });
  };

  render = () => {
    const { loaded } = this.state;
    if (!loaded) {
      return <Loader loaded={loaded} />;
    }

    const { errorMessage } = this.props;
    if (errorMessage) {
      return (
        <FetchError
          message={errorMessage}
          onReload={() => {
            this.setState({ loaded: false });
            this.getData();
          }}
        />
      );
    }

    const { post, category, categories } = this.props;
    const invalidPost = post === undefined || category !== post.category;
    const invalidCategory = !categories.map(el => el.path).includes(category);
    if (invalidPost || invalidCategory) {
      return <FourOhFour />;
    }

    const { postActions } = this.props;
    return (
      <SinglePage
        post={post}
        actions={postActions}
      />
    );
  };
}

const mapStateToProps = (state, ownProps) => {
  const { category, postId } = ownProps.match.params;

  return ({
    post: state.posts[postId],
    postId,
    categories: state.categories,
    category,
    errorMessage: state.errorMessage,
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
