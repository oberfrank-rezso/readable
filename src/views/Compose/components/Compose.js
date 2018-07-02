import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../../../shared/components/Dropdown';
import Header from '../../../shared/components/Header';

import AuthorIcon from '../../../shared/assets/author-icon.svg';

const Compose = ({ categories, form, handleInputChange, handleSubmit }) => (
  <div className="newpost-page">
    <Header title="New post" />
    <form onSubmit={handleSubmit} className="panel panel-single editing">
      <div className="panel-main">
        <div className="panel-title">
          <input type="text" name="title" placeholder="Title" onChange={handleInputChange} value={form.title} required />
        </div>
        <div className="panel-body">
          <input type="text" name="body" placeholder="body" onChange={handleInputChange} value={form.body} required />
        </div>
        <div className="panel-footer">
          <div className="panel-footer-text">
            <img src={AuthorIcon} alt="" />
            <input className="author-input" name="author" type="text" placeholder="anonymus" onChange={handleInputChange} value={form.author} />
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
              onChange={handleInputChange}
              value={form.category}
              name="category"
              required
            />
          </div>
          <div className="panel-footer-btns">
            <button className="panel-footer-btn" type="submit">Post</button>
            <Link to="/" className="panel-footer-btn">Cancel</Link>
          </div>
        </div>
      </div>
    </form>
  </div>
);

export default Compose;
