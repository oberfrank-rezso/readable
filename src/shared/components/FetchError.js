import React from 'react';

const FetchError = ({ message, onReload }) => (
  <div className="error-message">
    <h1>Something went wrong</h1>
    <p>ErrorMessage: {message}</p>
    <button onClick={onReload}>Reload</button>
  </div>
);

export default FetchError;
