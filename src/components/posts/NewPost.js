import React from 'react';
import Dropdown from '../common/Dropdown';

const NewPost = ({ categories, handleSubmit, handleCancel }) => (
  <form onSubmit={handleSubmit}>
    <input type="text" name="title" required />
    <input type="text" name="body" required />
    <input type="text" name="author" required />
    <Dropdown
      options={[
        {
          value: '',
          name: '-',
          disabled: true,
        },
        ...categories.map(category => ({
          value: category.path,
          name: category.name,
        })),
      ]}
      name="category"
      required
    />
    <button type="submit">Post</button>
    <button type="button" onClick={handleCancel}>Cancel</button>
  </form>
);

export default NewPost;
