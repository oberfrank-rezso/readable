import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader';
import uuidv1 from 'uuid/v1';

import { getAll as getCategories } from 'shared/duck/CategoryActions';
import { publish as publishPost } from 'shared/duck/PostActions';

import FetchError from 'shared/components/FetchError';
import Compose from './Compose';

class ComposeContainer extends React.Component {
  state = {
    loaded: false,
    form: {
      title: '',
      body: '',
      category: this.props.categories.map(el => el.path)[0],
      author: 'anonymus',
    },
  };

  componentDidMount = () => {
    this.getData();
  };

  getData = () => {
    this.props.getCategories()
      .finally(() => {
        this.setState({ loaded: true });
      });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      form: {
        ...prevState.form,
        [name]: value,
      },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const {
      title, body, category, author,
    } = this.state.form;
    const id = uuidv1();

    this.props.publishPost({
      id, title, body, category, author, timestamp: Date.now(),
    }).then(() => {
      this.props.history.push(`/${category}/${id}`);
    });
  };

  render = () => {
    const { loaded } = this.state;
    if (!loaded) {
      return <Loader loaded={loaded} />;
    }

    const { errorMessage } = this.props;
    if (errorMessage) {
      return (
        <FetchError
          message={errorMessage}
          onReload={() => {
            this.setState({ loaded: false });
            this.getData();
          }}
        />
      );
    }

    const { categories } = this.props;
    const { form } = this.state;
    return (
      <Compose
        form={form}
        categories={categories}
        handleInputChange={this.handleInputChange}
        handleSubmit={this.handleSubmit}
        handleCancel={this.handleCancel}
      />
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  errorMessage: state.errorMessage,
});

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(getCategories()),
  publishPost: post => dispatch(publishPost(post)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ComposeContainer);
