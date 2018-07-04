import React from 'react';
import uuidv1 from 'uuid/v1';
import Panel from './Panel';
import Button from './Button';

const Post = ({ post, actions, single = false }) => (
  <Panel>
    <Panel.Main>
      <Panel.Body>
        <Panel.Title
          post={{
            title: post.title,
            category: post.category,
            id: post.id,
          }}
          withLink={!single}
        />
        {single && <Panel.Text text={post.body} />}
      </Panel.Body>
      <Panel.Vote
        score={post.voteScore}
        onUpvote={() => actions.upvote(post.id)}
        onDownvote={() => actions.downvote(post.id)}
      />
    </Panel.Main>
    <Panel.Footer>
      <Panel.Footer.Meta
        author={post.author}
        commentCount={post.commentCount}
        timestamp={post.timestamp}
      />
      <Panel.Footer.Buttons>
        <Button text="delete" secondary onClick={() => actions.remove(post.id)} />
        <Button text="edit" onClick={() => actions.openEdit(post)} />
      </Panel.Footer.Buttons>
    </Panel.Footer>
  </Panel>
);

export class Form extends React.Component {
  state = this.props.post ? (
    this.props.post
  ) : ({
    title: '',
    body: '',
    author: 'anonymus',
    category: this.props.categories.map(el => el.path)[0],
    id: uuidv1(),
  });

  onInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { onSubmit } = this.props;

    onSubmit({
      ...this.state,
      timestamp: this.state.timestamp ? this.state.timestamp : Date.now(),
    });
  };

  render = () => {
    const isNew = this.props.post === null;
    const { categories, onCancel } = this.props;
    const {
      title, body, author,
      category,
    } = this.state;

    return (
      <Panel.Form onSubmit={this.handleSubmit}>
        <Panel.Header title={isNew ? 'New post' : 'Edit post'} />
        <Panel.Main>
          <Panel.Body>
            <Panel.Input name="title" value={title} onChange={this.onInputChange} required />
            <Panel.Input name="body" value={body} onChange={this.onInputChange} required />
            { isNew && (
              <React.Fragment>
                <Panel.Input name="author" value={author} onChange={this.onInputChange} required />
                <Panel.Input name="category" dropdown options={categories} value={category} onChange={this.onInputChange} required />
              </React.Fragment>
            )}
          </Panel.Body>
        </Panel.Main>
        <Panel.Footer>
          <Panel.Footer.Buttons>
            <Button text="cancel" secondary onClick={onCancel} />
            <Button text="submit" submit />
          </Panel.Footer.Buttons>
        </Panel.Footer>
      </Panel.Form>
    );
  };
}

export default Object.assign(Post, {
  Form,
});
