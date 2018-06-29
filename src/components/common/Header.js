import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ title }) => (
  <div className="header">
    <h1 className="header-title">{title}<Link className="header-link" to="/new">[new]</Link></h1>
  </div>
);

export default Header;
