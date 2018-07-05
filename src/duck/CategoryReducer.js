import {
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
} from './categoryTypes';

const categories = (state = [], action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_SUCCESS: {
      return action.payload.categories;
    }
    case FETCH_CATEGORIES_FAILURE: {
      return [];
    }
    default: {
      return state;
    }
  }
};

export default categories;
