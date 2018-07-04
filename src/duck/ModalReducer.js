import {
  NEW_POST_OPEN,
  NEW_POST_CANCEL,
  NEW_POST_REQUEST,
  NEW_POST_SUCCESS,
  NEW_POST_FAILURE,

  EDIT_POST_OPEN,
  EDIT_POST_CANCEL,
  EDIT_POST_REQUEST,
  EDIT_POST_SUCCESS,
  EDIT_POST_FAILURE,
} from './PostTypes';

const initialState = {
  isLoading: false,
  isOpen: false,
  post: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case NEW_POST_OPEN: {
      return {
        isOpen: true,
        isLoading: false,
        post: null,
      };
    }
    case EDIT_POST_OPEN: {
      return {
        isOpen: true,
        isLoading: false,
        post: action.payload.post,
      };
    }
    case NEW_POST_CANCEL:
    case EDIT_POST_CANCEL: {
      return {
        isOpen: false,
        isLoading: false,
        post: null,
      };
    }
    case NEW_POST_REQUEST:
    case EDIT_POST_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case NEW_POST_SUCCESS:
    case EDIT_POST_SUCCESS: {
      return {
        isOpen: false,
        isLoading: false,
        post: null,
      };
    }
    case NEW_POST_FAILURE:
    case EDIT_POST_FAILURE: {
      return {
        ...state,
        isLoading: false,
      };
    }
    default: {
      return state;
    }
  }
};
