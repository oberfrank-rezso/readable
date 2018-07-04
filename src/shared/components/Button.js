import React from 'react';

export default ({
  text, secondary,
  onClick, submit,
}) => (
  <button
    className={`btn ${secondary ? 'btn-secondary' : ''}`}
    type={submit ? 'submit' : 'button'}
    onClick={onClick}
  >{text}
  </button>
);
