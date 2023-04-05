import { REACT_APP_BASE_URL } from '../shared/config';

export const getAuth = {
  signin: () => {
    return REACT_APP_BASE_URL + 'auth/signin';
  },

  sendSignupAuthenticationNumber: () => {
    return 'auth/email';
  },

  sendFindPasswordAuthenticationNumber: () => {
    return 'auth/password/email';
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

  deleteGroup: () => {
    return 'group/';
  },
  getGroupTimer: () => {
    return 'group/timer/';
  },
};

export const getUser = {
  getUserInfo: () => {
    return REACT_APP_BASE_URL + 'user/header';
  },

  changeName: () => {
    return 'user/name';
  },

  changeProfileImage: () => {
    return 'user/image';
  },
};

export const postImage = {
  postImage: () => {
    return 'image';
  },
};
