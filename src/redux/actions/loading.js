import { PUSH_LOADING, POP_LOADING } from '../constants';

export const push = item => ({
  type: PUSH_LOADING,
  payload: {
    item,
  },
});

export const pop = item => ({
  type: POP_LOADING,
  payload: {
    item,
  },
});
