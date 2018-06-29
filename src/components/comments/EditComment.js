import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import serializeForm from 'form-serialize';

import AuthorIcon from '../../images/author-icon.svg';

const EditComment = ({ comment, actions, history }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const { body } = serializeForm(form, { hash: true });

    actions.edit({
      id: comment.id,
      timestamp: Date.now(),
      body,
    });

    history.push({ search: '' });
  };

  return (
    <form className="panel" onSubmit={handleSubmit}>
      <div className="panel-main">
        <div className="panel-body">
          <input name="body" type="text" defaultValue={comment.body} required />
        </div>
        <div className="panel-footer">
          <div className="panel-footer-text">
            <img src={AuthorIcon} alt="" />
            {comment.author}
          </div>
          <div className="panel-footer-btns">
            <button
              className="panel-footer-btn"
              type="submit"
            >submit
            </button>
            <Link
              className="panel-footer-btn"
              to={{ search: '' }}
            >cancel
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default withRouter(EditComment);
