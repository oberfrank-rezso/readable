import { List } from 'immutable';
import { LOAD_CATEGORIES } from '../constants';

const categories = (state = List(), action) => {
  switch (action.type) {
    case LOAD_CATEGORIES: {
      return List(action.payload.categories);
    }
    default: {
      return state;
    }
  }
};

export default categories;
