import { REACT_APP_BASE_URL } from 'shared/BaseUrl';

export const getAuth = {
  tokenReissuance: () => {
    return REACT_APP_BASE_URL + 'auth/refresh';
  },
};
