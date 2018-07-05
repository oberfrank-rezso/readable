import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Loader from 'react-loader';
import ReactModal from 'react-modal';

import * as PostActionCreators from 'duck/postActions';

import { Form } from 'shared/components/Post';
import Error from 'shared/components/Error';

ReactModal.setAppElement('#root');

ReactModal.defaultStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '80%',
    minWidth: 304,
    maxWidth: 616,
    transform: 'translate(-50%,-50%)',
    border: 'none',
    background: '#ffffff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: 0,
    outline: 'none',
    padding: '-8px 0',
  },
};

const Modal = ({
  modal: { isOpen, isLoading, post }, actions, categories, errorMessage,
}) => {
  const isNew = post === null;
  if (isOpen && errorMessage) {
    return (
      <Error
        message={errorMessage}
        onReload={isNew ? actions.openNew : () => actions.openEdit(post)}
      />
    );
  }
  return (
    <ReactModal
      isOpen={isOpen}
      shouldCloseOnOverlayClick={false}
    >
      <Loader loaded={!isLoading}>
        <Form
          post={post}
          categories={categories}
          onSubmit={isNew ? actions.publish : actions.update}
          onCancel={isNew ? actions.cancelNew : actions.cancelEdit}
        />
      </Loader>
    </ReactModal>
  );
};

const mapStateToProps = state => ({
  modal: state.modal,
  categories: state.categories,
  errorMessage: state.errorMessage,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(PostActionCreators, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);
