import { REACT_APP_BASE_URL } from '../shared/config';

export const getAuth = {
  signin: () => {
    return REACT_APP_BASE_URL + 'auth/signin';
  },

  tokenReissuance: () => {
    return REACT_APP_BASE_URL + 'auth/refresh';
  },
};
