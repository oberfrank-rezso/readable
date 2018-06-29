import React from 'react';
import Comment from './Comment';
import NewComment from './NewComment';
import EditComment from './EditComment';

const Comments = ({
  comments, actions,
  postId, editId,
}) => (
  <div className="comments">
    <div className="comments-header">{comments.size} comments</div>
    {comments
      .toSetSeq()
      .map(comment => (
        comment.id === editId ? (
          <EditComment
            comment={comment}
            actions={actions}
          />
        ) : (
          <Comment
            comment={comment}
            actions={actions}
          />
        )
      ))}
    <NewComment postId={postId} addComment={actions.add} />
  </div>
);

export default Comments;
