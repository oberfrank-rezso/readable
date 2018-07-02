import React from 'react';
import { Link } from 'react-router-dom';

import AuthorIcon from '../../../../../shared/assets/author-icon.svg';

const Comment = ({ comment, actions }) => (
  <div className="panel">
    <div className="panel-main">
      <div className="panel-body">
        <p>{comment.body}</p>
      </div>
      <div className="panel-footer">
        <div className="panel-footer-text">
          <img src={AuthorIcon} alt="" />
          {comment.author} | {new Date(comment.timestamp).toLocaleString()}
        </div>
        <div className="panel-footer-btns">
          <Link
            className="panel-footer-btn"
            to={{ search: `?editingComment=${comment.id}` }}
          >edit
          </Link>
          <button
            className="panel-footer-btn"
            onClick={() => actions.remove({ id: comment.id, parentId: comment.parentId })}
          >delete
          </button>
        </div>
      </div>
    </div>
    <div className="panel-side">
      <button
        className="panel-side-btn upvote"
        onClick={() => actions.upvote(comment.id)}
      />
      <div className="panel-side-vote">
        <div className="panel-side-vote-score">
          {comment.voteScore}
        </div>
        <div className="panel-side-vote-text">
          votes
        </div>
      </div>
      <button
        className="panel-side-btn downvote"
        onClick={() => actions.downvote(comment.id)}
      />
    </div>
  </div>
);

export default Comment;
