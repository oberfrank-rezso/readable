import React from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

const Error = ({ message, onReload }) => (
  <ReactModal isOpen style={{ zIndex: 1000 }} shouldCloseOnOverlayClick={false}>
    <div className="error-message">
      <h1>Something went wrong</h1>
      <p>ErrorMessage: {message}</p>
      <button onClick={onReload}>Reload</button>
    </div>
  </ReactModal>
);

export default Error;
