import { REACT_APP_BASE_URL } from '../shared/config';

export const getAuth = {
  signin: () => {
    return REACT_APP_BASE_URL + 'auth/signin';
  },

  sendAuthenticationNumber: () => {
    return 'auth/email';
  },

  checkAuthenticationNumber: () => {
    return 'auth/code';
  },

  tokenReissuance: () => {
    return REACT_APP_BASE_URL + 'auth/refresh';
  },
};
