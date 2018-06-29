/* eslint import/prefer-default-export:0 */
import { LOAD_CATEGORIES } from './CategoryTypes';
import { POP_LOADING } from './LoadingTypes';

import { CategoryAPI } from '../../shared/api/index';

export const getAll = () => dispatch => (
  CategoryAPI.getAll().then(data => (
    dispatch({
      type: LOAD_CATEGORIES,
      payload: {
        categories: data.categories,
      },
    })
  )).then(() => (
    dispatch({
      type: POP_LOADING,
      payload: {
        item: 'categories',
      },
    })
  ))
);
