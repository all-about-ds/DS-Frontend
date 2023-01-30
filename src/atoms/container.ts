import { atom } from 'recoil';

export const dummyAtom = atom({
  key: 'dummy',
  default: false,
});

export const signupCurrentSectionAtom = atom({
  key: 'signupCurrentSection',
  default: 1,
});

export const signupEmailDuplicationModalAtom = atom({
  key: 'signupEmailDuplicationModal',
  default: false,
});
