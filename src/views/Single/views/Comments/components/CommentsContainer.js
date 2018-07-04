import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as CommentActionCreators from 'shared/duck/CommentActions';

import Comments from './Comments';

class CommentsContainer extends React.Component {
  state = {
    editId: null,
  };

  componentDidMount() {
    this.props.actions.getByPost(this.props.postId);
  }

  render = () => {
    const { editId } = this.state;
    const { comments: rawComments, actions, postId } = this.props;
    const comments = Object.values(rawComments).filter(comment => comment.parentId === postId);

    return (
      <Comments
        comments={comments}
        actions={actions}
        postId={postId}
        editId={editId}
        setEditId={id => this.setState({ editId: id })}
        unsetEditId={() => this.setState({ editId: null })}
      />
    );
  };
}

const mapStateToProps = state => ({
  comments: state.comments,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(CommentActionCreators, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommentsContainer);
