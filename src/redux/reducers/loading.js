import { List } from 'immutable';
import { PUSH_LOADING, POP_LOADING } from '../constants';

const initialState = List(['categories', 'single']);

const loading = (state = initialState, action) => {
  switch (action.type) {
    case PUSH_LOADING: {
      return state.push(action.payload.item);
    }
    case POP_LOADING: {
      return state.filterNot(el => el === action.payload.item);
    }
    default: {
      return state;
    }
  }
};

export default loading;
