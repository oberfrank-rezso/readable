import React from 'react';
import uuidv1 from 'uuid/v1';
import Panel from 'shared/components/Panel';
import Button from 'shared/components/Button';

const Comment = ({ comment, actions, setEditId }) => (
  <Panel>
    <Panel.Main>
      <Panel.Body>
        <Panel.Text text={comment.body} />
      </Panel.Body>
      <Panel.Vote
        score={comment.voteScore}
        onUpvote={() => actions.upvote(comment.id)}
        onDownvote={() => actions.downvote(comment.id)}
      />
    </Panel.Main>
    <Panel.Footer>
      <Panel.Footer.Meta
        author={comment.author}
        timestamp={comment.timestamp}
      />
      <Panel.Footer.Buttons>
        <Button text="delete" secondary onClick={() => actions.remove({ id: comment.id, parentId: comment.parentId })} />
        <Button text="edit" onClick={() => setEditId(comment.id)} />
      </Panel.Footer.Buttons>
    </Panel.Footer>
  </Panel>
);

class Form extends React.Component {
  state = this.props.comment ? (
    this.props.comment
  ) : ({
    body: '',
    author: 'anonymus',
    parentId: this.props.postId,
  });

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const { onSubmit, unsetEditId } = this.props;

    onSubmit({
      ...this.state,
      timestamp: this.state.timestamp ? this.state.timestamp : Date.now(),
    }).then(() => {
      if (this.props.comment) {
        unsetEditId();
      } else {
        this.setState({ body: '', author: 'anonymus',  id: uuidv1() });
        form.reset();
      }
    });
  };

  render = () => (
    <Panel.Form onSubmit={this.handleSubmit}>
      <Panel.Main>
        <Panel.Body>
          <Panel.Input name="body" value={this.state.body} onChange={this.handleInputChange} required />
          {!this.props.comment && <Panel.Input name="author" value={this.state.author} onChange={this.handleInputChange} required />}
        </Panel.Body>
      </Panel.Main>
      <Panel.Footer>
        {this.props.comment && <Panel.Footer.Meta author={this.props.comment.author} />}
        <Panel.Footer.Buttons>
          {this.props.comment && <Button text="cancel" secondary onClick={this.props.unsetEditId} />}
          <Button text="send" submit />
        </Panel.Footer.Buttons>
      </Panel.Footer>
    </Panel.Form>
  );
}

export default Object.assign(Comment, {
  Form,
});
