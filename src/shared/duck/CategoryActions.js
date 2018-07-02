/* eslint import/prefer-default-export:0 */
import {
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
} from './CategoryTypes';

import { CategoryAPI } from '../../shared/api/index';

export const getAll = () => (dispatch) => {
  dispatch({
    type: FETCH_CATEGORIES_REQUEST,
  });
  return CategoryAPI.getAll().then(data => (
    dispatch({
      type: FETCH_CATEGORIES_SUCCESS,
      payload: {
        categories: data.categories,
      },
    })
  )).catch(error => (
    dispatch({
      type: FETCH_CATEGORIES_FAILURE,
      payload: {
        error,
      },
    })
  ));
};
