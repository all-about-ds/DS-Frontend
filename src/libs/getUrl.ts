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

  signup: () => {
    return 'auth/signup';
  },

  tokenReissuance: () => {
    return REACT_APP_BASE_URL + 'auth';
  },

  findPassword: () => {
    return 'auth/change';
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

  getGroupInformation: () => {
    return 'group/information/';
  },

  kickMember: () => {
    return 'group/member/';
  },

  mandateMember: () => {
    return 'group/mandate/';
  },
};
