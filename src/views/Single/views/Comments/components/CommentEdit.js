import React from 'react';

import AuthorIcon from 'shared/assets/author-icon.svg';

class EditComment extends React.Component {
  state = {
    body: this.props.comment.body,
  };

  handleInputChange = (e) => {
    const { value } = e.target;
    this.setState({
      body: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { actions, unsetEditId } = this.props;

    actions.update({
      id: this.props.comment.id,
      body: this.state.body,
      timestamp: Date.now(),
    }).then(() => {
      unsetEditId();
    });
  };

  render = () => (
    <form className="panel" onSubmit={this.handleSubmit}>
      <div className="panel-main">
        <div className="panel-body">
          <input name="body" type="text" value={this.state.body} onChange={this.handleInputChange} required />
        </div>
        <div className="panel-footer">
          <div className="panel-footer-text">
            <img src={AuthorIcon} alt="" />
            {this.props.comment.author}
          </div>
          <div className="panel-footer-btns">
            <button
              className="panel-footer-btn"
              type="submit"
            >submit
            </button>
            <button
              className="panel-footer-btn"
              type="button"
              onClick={this.props.unsetEditId}
            >cancel
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default EditComment;
