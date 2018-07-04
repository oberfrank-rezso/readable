import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'shared/components/Dropdown';

import AuthorIcon from 'shared/assets/author-icon.svg';
import CommentIcon from 'shared/assets/comment-icon.svg';

const Panel = ({ children }) => (
  <div className="panel">
    {children}
  </div>
);

const Header = ({ title }) => (
  <div className="header">
    <h1>{title}</h1>
  </div>
);

const Main = ({ children }) => (
  <div className="main">
    {children}
  </div>
);

const Body = ({ children }) => (
  <div className="body">
    {children}
  </div>
);

const Vote = ({ score, onUpvote, onDownvote }) => (
  <div className="vote">
    <button className="btn" onClick={onUpvote} />
    <div className="score">
      <span className="big">{score}</span>
      <br />votes
    </div>
    <button className="btn" onClick={onDownvote} />
  </div>
);

const Title = ({ post: { title, category, id }, withLink }) => (
  withLink ? (
    <Link className="title" to={`/${category}/${id}`}>
      <h2>{title}</h2>
    </Link>
  ) : (
    <h2 className="title">{title}</h2>
  )
);

const Text = ({ text }) => (
  <div className="text">
    {text}
  </div>
);

const Footer = ({ children }) => (
  <div className="footer">
    {children}
  </div>
);

const FooterMeta = ({ author, commentCount, timestamp }) => (
  <div className="meta">
    <img src={AuthorIcon} alt="" />{` ${author}`}
    {commentCount !== undefined && (
      <React.Fragment>
        {' | '}<img src={CommentIcon} alt="" /> {commentCount}
      </React.Fragment>
    )}
    {timestamp !== undefined && ` | ${new Date(timestamp).toLocaleString()}`}
  </div>
);

const FooterButtons = ({ children }) => (
  <div className="btns">
    {children}
  </div>
);

const Form = ({ children, onSubmit }) => (
  <form className="panel" onSubmit={onSubmit}>
    {children}
  </form>
);

export const Input = ({
  name, value, onChange, required, dropdown = false, options = [],
}) => (
  <div className="input-row">
    <div className="label">{name}</div>
    {dropdown ? (
      <div className="dropdown">
        <Dropdown
          name={name}
          value={value}
          options={options}
          onChange={onChange}
          required
        />
      </div>
    ) : (
      <input
        className="input"
        name={name}
        type="text"
        value={value}
        onChange={onChange}
        required={required}
      />
    )}
  </div>
);

export default Object.assign(Panel, {
  Form,
  Input,
  Header,
  Vote,
  Main,
  Body,
  Title,
  Text,
  Footer: Object.assign(Footer, {
    Meta: FooterMeta,
    Buttons: FooterButtons,
  }),
});
