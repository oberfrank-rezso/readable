import React from 'react';
import serializeForm from 'form-serialize';
import uuidv1 from 'uuid/v1';

import AuthorIcon from '../../../../../shared/assets/author-icon.svg';

const NewComment = ({ postId, addComment }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = serializeForm(form, { hash: true });

    addComment({
      body: formData.body,
      author: formData.author || 'anonymus',
      timestamp: Date.now(),
      parentId: postId,
      id: uuidv1(),
    });

    form.reset();
  };

  return (
    <form className="panel" onSubmit={handleSubmit}>
      <div className="panel-main">
        <div className="panel-body">
          <input required name="body" type="text" placeholder="Start typing..." />
        </div>
        <div className="panel-footer">
          <div className="panel-footer-text">
            <img src={AuthorIcon} alt="" />
            <input className="author-input" name="author" type="text" placeholder="anonymus" />
          </div>
        </div>
      </div>
      <div className="panel-side">
        <button className="panel-side-full-btn" type="submit">Post</button>
      </div>
    </form>
  );
};

export default NewComment;
