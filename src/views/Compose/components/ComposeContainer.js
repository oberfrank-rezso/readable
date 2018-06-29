import React from 'react';
import { connect } from 'react-redux';
import serializeForm from 'form-serialize';
import uuidv1 from 'uuid/v1';

import { add as addPost } from 'shared/duck/PostActions';
import { getAll as getCategories } from 'shared/duck/CategoryActions';

import NewPost from './Compose';

class NewPostContainer extends React.Component {
  componentDidMount = () => {
    this.props.loadCategories();
  };


  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = serializeForm(form, { hash: true });
    const id = uuidv1();

    this.props.addPost({
      ...formData,
      id,
      timestamp: Date.now(),
    });

    this.props.history.push(`/${formData.category}/${id}`);
  };

  handleCancel = () => {
    this.props.history.push('/');
  };

  render = () => (
    <NewPost
      categories={this.props.categories}
      handleSubmit={this.handleSubmit}
      handleCancel={this.handleCancel}
    />
  );
}

const mapStateToProps = state => ({
  categories: state.categories,
});

const mapDispatchToProps = dispatch => ({
  loadCategories: () => dispatch(getCategories()),
  addPost: post => dispatch(addPost(post)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewPostContainer);
