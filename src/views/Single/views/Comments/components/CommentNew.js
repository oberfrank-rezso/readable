import React from 'react';
import uuidv1 from 'uuid/v1';

import AuthorIcon from 'shared/assets/author-icon.svg';

class NewComment extends React.Component {
  state = {
    body: '',
    author: 'anonymus',
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const { body, author } = this.state;
    const { postId, publishComment } = this.props;

    publishComment({
      body,
      author,
      timestamp: Date.now(),
      parentId: postId,
      id: uuidv1(),
    }).then(() => {
      this.setState({ body: '', author: 'anonymus' });
      form.reset();
    });
  };

  render = () => (
    <form className="panel" onSubmit={this.handleSubmit}>
      <div className="panel-main">
        <div className="panel-body">
          <input
            name="body"
            value={this.state.body}
            placeholder="Start typing..."
            onChange={this.handleInputChange}
            type="text"
            required
          />
        </div>
        <div className="panel-footer">
          <div className="panel-footer-text">
            <img src={AuthorIcon} alt="" />
            <input
              className="author-input"
              name="author"
              value={this.state.author}
              placeholder="Who are you?"
              onChange={this.handleInputChange}
              type="text"
              required
            />
          </div>
        </div>
      </div>
      <div className="panel-side">
        <button
          className="panel-side-full-btn"
          type="submit"
        >Post
        </button>
      </div>
    </form>
  );
}

export default NewComment;
