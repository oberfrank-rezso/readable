import { Map } from 'immutable';

const toPostMap = post => (
  post.reduce((acc, el) => (
    acc.set(el.id, Map(el))
  ), Map())
);

export default toPostMap;
