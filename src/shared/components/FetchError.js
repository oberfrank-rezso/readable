import React from 'react';

const FetchError = ({ message, onRetry }) => (
  <div className="error-message">
    <h1>Something went wrong</h1>
    <p>ErrorMessage: {message}</p>
    <button onClick={onRetry}>Retry</button>
  </div>
);

export default FetchError;
