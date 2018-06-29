/* eslint import/prefer-default-export:0 */
import { LOAD_CATEGORIES, POP_LOADING } from '../constants';

import ReadableAPI from '../../api';

export const getAll = () => dispatch => (
  ReadableAPI.categories.getAll().then(data => (
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
