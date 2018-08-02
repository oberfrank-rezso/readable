import React from 'react';
import { connect } from 'react-redux';

import * as commentActions from 'duck/commentActions';
import Comments from './Comments';

class CommentsContainer extends React.Component {
  state = {
    editId: null,
  };

  componentDidMount() {
    this.props.getByPost(this.props.postId);
  }

  setEditId = (id) => {
    this.setState({ editId: id });
  };

  unsetEditId = () => {
    this.setState({ editId: null });
  };

  render = () => {
    const { editId } = this.state;
    const {
      comments: rawComments, postId,
      publish, update, remove, upvote, downvote,
    } = this.props;
    const comments = Object.values(rawComments).filter(comment => comment.parentId === postId);

    return (
      <Comments
        comments={comments}
        actions={{ publish, update, remove, upvote, downvote }}
        postId={postId}
        editId={editId}
        setEditId={this.setEditId}
        unsetEditId={this.unsetEditId}
      />
    );
  };
}

const mapStateToProps = ({ comments }) => ({ comments });

export default connect(
  mapStateToProps,
  commentActions,
)(CommentsContainer);
