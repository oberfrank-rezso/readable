import React from 'react';
import { Link } from 'react-router-dom';

import AuthorIcon from '../../images/author-icon.svg';
import CommentIcon from '../../images/comment-icon.svg';

const Post = ({ post, actions, single = false }) => (
  <div className={`panel ${single && 'panel-single'}`}>
    <div className="panel-main">
      { single ? (
        <div className="panel-title">
          <h2>{post.title}</h2>
        </div>
      ) : (
        <Link
          className="panel-title"
          to={`/${post.category}/${post.id}`}
        ><h2>{post.title}</h2>
        </Link>
      )}
      { single && (
        <div className="panel-body">
          <p>{post.body}</p>
        </div>
      )}
      <div className="panel-footer">
        <div className="panel-footer-text">
          <img src={AuthorIcon} alt="" />
          {post.author} |
          { !single && (
            <React.Fragment>
              <img src={CommentIcon} alt="" />
              {post.commentCount} |
            </React.Fragment>
          )}
          {` ${new Date(post.timestamp).toLocaleString()}`}
        </div>
        <div className="panel-footer-btns">
          <Link
            className="panel-footer-btn"
            to={`/${post.category}/${post.id}?editing`}
          >edit
          </Link>
          <button
            className="panel-footer-btn"
            onClick={() => actions.remove(post.id)}
          >delete
          </button>
        </div>
      </div>
    </div>
    <div className="panel-side panel-side-corner">
      <button
        className="panel-side-btn upvote"
        onClick={() => actions.upvote(post.id)}
      />
      <div className="panel-side-vote">
        <div className="panel-side-vote-score">
          {post.voteScore}
        </div>
        <div className="panel-side-vote-text">
          votes
        </div>
      </div>
      <button
        className="panel-side-btn downvote"
        onClick={() => actions.downvote(post.id)}
      />
    </div>
  </div>
);

export default Post;
