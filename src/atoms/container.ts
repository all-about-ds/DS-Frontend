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

export const findPasswordCurrentSectionAtom = atom({
  key: 'findPasswordCurrentSection',
  default: 1,
});

export const groupIsClickedAtom = atom({
  key: 'groupIsClicked',
  default: false,
});

export const groupPasswordModalAtom = atom({
  key: 'groupPasswordAtom',
  default: false,
});

export const groupIndexAtom = atom({
  key: 'gruopIndex',
  default: 0,
});
