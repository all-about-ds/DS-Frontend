import { REACT_APP_BASE_URL } from 'shared/config';

export const getAuth = {
  tokenReissuance: () => {
    return REACT_APP_BASE_URL + 'auth/refresh';
  },
};
