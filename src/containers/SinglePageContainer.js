import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Loader from 'react-loader';

import * as CategoryActionCreatores from '../redux/actions/categories';
import * as PostActionCreators from '../redux/actions/posts';
import * as LoadingActionCreators from '../redux/actions/loading';

import SinglePage from '../components/posts/SinglePage';
import FourOhFour from '../components/FourOhFour';

class SinglePageContainer extends React.Component {
  componentDidMount = () => {
    const { postActions, categoryActions, loadingActions } = this.props;
    const { postId } = this.props.match.params;

    categoryActions.getAll();

    postActions.get(postId)
      .then(() => loadingActions.pop('single'));
  };

  componentWillUnmount = () => {
    this.props.loadingActions.push('single');
  };

  render = () => {
    const {
      categories, loading, posts, postActions,
    } = this.props;
    const { category, postId } = this.props.match.params;

    const categoryPaths = categories.map(el => el.path);
    const isInvalidCategory = !categoryPaths.includes(category);
    const categoriesAreLoaded = !loading.includes('categories');
    if (categoriesAreLoaded && isInvalidCategory) {
      return <FourOhFour />;
    }


    const loaded = !loading.includes('single');
    const hasPost = posts.has(postId);

    if (loaded && !hasPost) {
      return <FourOhFour />;
    }

    const post = posts.get(postId);

    if (loaded && category !== post.category) {
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

const mapStateToProps = state => ({
  posts: state.posts,
  loading: state.loading,
  categories: state.categories,
});

const mapDispatchToProps = dispatch => ({
  categoryActions: bindActionCreators(CategoryActionCreatores, dispatch),
  postActions: bindActionCreators(PostActionCreators, dispatch),
  loadingActions: bindActionCreators(LoadingActionCreators, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SinglePageContainer);
