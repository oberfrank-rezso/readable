import React from 'react';
import Comment from './Comment';
import CommentNew from './CommentNew';
import CommentEdit from './CommentEdit';

const Comments = ({
  postId, comments, actions,
  editId, setEditId, unsetEditId,
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
            unsetEditId={unsetEditId}
          />
        ) : (
          <Comment
            key={`comment-${comment.id}`}
            comment={comment}
            actions={actions}
            setEditId={setEditId}
          />
        )
      ))}
    <CommentNew postId={postId} publishComment={actions.publish} />
  </div>
);

export default Comments;
