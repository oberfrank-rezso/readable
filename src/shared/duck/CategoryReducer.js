import { List } from 'immutable';
import {
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
} from './CategoryTypes';

const categories = (state = List(), action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_SUCCESS: {
      return List(action.payload.categories);
    }
    case FETCH_CATEGORIES_FAILURE: {
      return List();
    }
    default: {
      return state;
    }
  }
};

export default categories;
