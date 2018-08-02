import React from 'react';
import { Header, Form, Button, Comment, Icon, Popup, Container, Modal, Divider } from 'semantic-ui-react';
import uuidv1 from 'uuid/v1';
import avatar from 'shared/assets/avatar.jpg';

class Comments extends React.Component {
  state = {
    publish: {
      value: '',
      error: false,
    },
    edit: {
      error: false,
      open: false,
      id: null,
      value: '',
    },
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ publish: { error: false, value } })
  };

  handleSubmit = () => {
    if (this.state.publish.value === '') {
      this.setState({ publish: { error: true, value: '' } });
    } else {
      this.props.actions.publish({
        id: uuidv1(),
        parentId: this.props.postId,
        timestamp: new Date(),
        author: 'anonymus', // TODO: wire in redux for user
        body: this.state.publish.value,
      });
      this.setState({ publish: { value: '', error: false } });
    }
  };

  openEditModal = (id) => {
    const { comments } = this.props;

    this.setState(({ edit }) => ({
      edit: {
        ...edit,
        value: comments.find(el => el.id === id).body,
        id,
        open: true,
      }
    }))
  };
  closeEditModal = () => this.setState({ edit: { id: null, value: '', error: false, open: false } });

  handleEditChange = ({ target: { value }}) => {
    this.setState(({ edit }) => ({ edit: { ...edit, error: false, value }}));
  }

  handleEditSubmit = () => {
    if (this.state.edit.value === '') {
      this.setState(({ edit }) => ({ edit: { ...edit, error: true }}));
    } else {
      this.props.actions.update({
        id: this.state.edit.id,
        timestamp: new Date(),
        body: this.state.edit.value,
      }).then(() => this.closeEditModal());
    }
  }

  render = () => {
    const { comments, actions } = this.props;
    const { publish, edit } = this.state;

    return (
      <Container>
        <Comment.Group>
          {comments.length !== 0 && (
            <React.Fragment>
              <Header as='h3' dividing>
                {comments.length} comments
              </Header>

              {comments.map(comment => {
                const date = new Date(comment.timestamp);
                const dateString = `${date.getFullYear()}/${date.getMonth()}/${date.getDay()} ${date.getHours()}:${date.getMinutes()}`;

                return (
                  <Comment key={`comment-${comment.id}`}>
                    <Comment.Avatar src={avatar} />
                    <Comment.Content>
                      <Comment.Author as='span'>{comment.author}</Comment.Author>
                      <Comment.Metadata>
                        {dateString}
                      </Comment.Metadata>
                      <Comment.Text>{comment.body}</Comment.Text>
                      <Comment.Actions>
                        <Comment.Action as='span' style={{ color: 'rgba(0,0,0,.4)', marginRight: '0.75rem' }}>
                          <Icon name='thumbs up' />
                          {comment.voteScore} votes
                        </Comment.Action>
                        <Comment.Action onClick={() => actions.upvote(comment.id)}>Up</Comment.Action>
                        <Comment.Action onClick={() => actions.downvote(comment.id)}>Down</Comment.Action>
                        <Comment.Action onClick={() => this.openEditModal(comment.id)}>Edit</Comment.Action>
                        <Comment.Action onClick={() => actions.remove(comment)}>Delete</Comment.Action>
                      </Comment.Actions>
                    </Comment.Content>
                  </Comment>
                );
              })}
            </React.Fragment>
          )}

          <Divider />

          <Form reply onSubmit={this.handleSubmit}>
            <Popup
              trigger={
                <Form.TextArea
                  value={publish.value}
                  onChange={this.handleChange}
                  error={publish.error}
                  autoHeight
                  rows={2}
                />
              }
              content='Sorry, we do not accept empty comments...'
              open={publish.error}
              position='top right'
              inverted
            />
            <Button content='Add Comment' labelPosition='left' icon='edit' primary />
          </Form>
        </Comment.Group>

        <Modal
          open={this.state.edit.open}
        >
          <Modal.Header content='Edit comment' />
          <Modal.Content>
            <Form onSubmit={this.handleEditSubmit}>
              <Popup
                trigger={
                  <Form.TextArea
                    value={edit.value}
                    onChange={this.handleEditChange}
                    error={edit.error}
                    autoHeight
                    rows={2}
                  />
                }
                content='Sorry, we do not accept empty comments...'
                open={edit.error}
                position='top right'
                inverted
              />
              <Button type='submit' content="submit" />
            </Form>
          </Modal.Content>
        </Modal>

      </Container>
    )
  };
};

export default Comments;
