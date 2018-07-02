import React from 'react';
import Comment from './Comment';
import CommentNew from './CommentNew';
import CommentEdit from './CommentEdit';

const Comments = ({
  comments, actions,
  postId, editId,
}) => (
  <div className="comments">
    <div className="comments-header">{comments.length} comments</div>
    {comments
      .map(comment => (
        comment.id === editId ? (
          <CommentEdit
            key={`comment-${comment.id}`}
            comment={comment}
            actions={actions}
          />
        ) : (
          <Comment
            key={`comment-${comment.id}`}
            comment={comment}
            actions={actions}
          />
        )
      ))}
    <CommentNew postId={postId} publishComment={actions.publish} />
  </div>
);

export default Comments;
