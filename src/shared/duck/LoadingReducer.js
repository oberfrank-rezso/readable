import { List } from 'immutable';
import { FETCH_POST_REQUEST, FETCH_POST_SUCCESS, FETCH_POST_FAILURE } from './PostTypes';
import { FETCH_CATEGORIES_REQUEST, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAILURE } from './CategoryTypes';

const CATEGORIES = 'CATEGORIES';
const SINGLE = 'SINGLE';

const initialState = List([CATEGORIES, SINGLE]);

const loading = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST_REQUEST: {
      return state.push(SINGLE);
    }
    case FETCH_POST_FAILURE:
    case FETCH_POST_SUCCESS: {
      return state.filterNot(el => el === SINGLE);
    }
    case FETCH_CATEGORIES_REQUEST: {
      return state.push(CATEGORIES);
    }
    case FETCH_CATEGORIES_FAILURE:
    case FETCH_CATEGORIES_SUCCESS: {
      return state.filterNot(el => el === CATEGORIES);
    }
    default: {
      return state;
    }
  }
};

export default loading;
