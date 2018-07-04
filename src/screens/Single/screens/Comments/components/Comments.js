import React from 'react';
import Comment from './Comment';

const Comments = ({
  postId, comments, actions,
  editId, setEditId, unsetEditId,
}) => (
  <div className="comments">
    {comments.length > 0 &&
      <React.Fragment>
        <div className="comments-header">
          {`${comments.length} comment${comments.length > 1 ? 's' : ''}`}
        </div>
        {comments
          .map(comment => (
            comment.id === editId ? (
              <Comment.Form
                key={`comment-${comment.id}`}
                comment={comment}
                onSubmit={edited => actions.update(edited)}
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
      </React.Fragment>}
    <div className="comments-header">New comment</div>
    <Comment.Form postId={postId} onSubmit={actions.publish} />
  </div>
);

export default Comments;
