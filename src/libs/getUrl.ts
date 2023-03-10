import { REACT_APP_BASE_URL } from '../shared/config';

export const getAuth = {
  signin: () => {
    return REACT_APP_BASE_URL + 'auth/signin';
  },

  sendAuthenticationNumber: () => {
    return 'auth/email';
  },

  tokenReissuance: () => {
    return REACT_APP_BASE_URL + 'auth';
  },
};

export const getGroup = {
  getList: () => {
    return REACT_APP_BASE_URL + 'group';
  },

  getModalDetail: () => {
    return 'group/detail/';
  },

  joinGroup: () => {
    return 'group/join';
  },
};
