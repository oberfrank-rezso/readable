import React from 'react';
import { Link } from 'react-router-dom';

const FourOhFour = () => (
  <div className="four-oh-four">
    <h1 className="title">404</h1>
    <h5 className="description">
      This can't be what you are looking for!
      <br />Maybe it's on our <Link to="/">homepage</Link>!
    </h5>
  </div>
);

export default FourOhFour;
