import React from 'react';
import Dropdown from '../../../shared/components/Dropdown';
import Header from '../../../shared/components/Header';

import AuthorIcon from '../../../shared/assets/author-icon.svg';

const NewPost = ({ categories, handleSubmit, handleCancel }) => (
  <div className="newpost-page">
    <Header title="New post" />
    <form onSubmit={handleSubmit} className="panel panel-single editing">
      <div className="panel-main">
        <div className="panel-title">
          <input type="text" name="title" placeholder="Title" required />
        </div>
        <div className="panel-body">
          <input type="text" name="body" placeholder="body" required />
        </div>
        <div className="panel-footer">
          <div className="panel-footer-text">
            <img src={AuthorIcon} alt="" />
            <input className="author-input" name="author" type="text" placeholder="anonymus" />
            <Dropdown
              options={[
                {
                  value: '',
                  name: '-',
                  disabled: true,
                },
                ...categories.map(category => ({
                  value: category.path,
                  name: category.name,
                })),
              ]}
              name="category"
              required
            />
          </div>
          <div className="panel-footer-btns">
            <button className="panel-footer-btn" type="submit">Post</button>
            <button className="panel-footer-btn" type="button" onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      </div>
    </form>
  </div>
);

export default NewPost;
