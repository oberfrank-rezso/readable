import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ title, displayNew }) => (
  <div className="header">
    <h1 className="header-title">
      {title}
      {displayNew && <Link className="header-link" to="/compose">[new]</Link>}
    </h1>
  </div>
);

export default Header;
