import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import qs from 'qs';

import * as CommentActionCreators from 'shared/duck/CommentActions';

import Comments from './Comments';

class CommentsContainer extends React.Component {
  componentDidMount() {
    this.props.actions.loadByPost(this.props.postId);
  }

  render = () => {
    const {
      comments: unfilteredComments, actions,
      postId, location,
    } = this.props;
    const comments = unfilteredComments.filter(comment => comment.parentId === postId);

    const editId = qs.parse(location.search.substring(1)).editingComment;

    return React.createElement(Comments, {
      comments, actions, postId, editId,
    });
  };
}

const mapStateToProps = state => ({
  comments: state.comments,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(CommentActionCreators, dispatch),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommentsContainer));
