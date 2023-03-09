import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { SignupInterface } from 'types/auth.type';
const { persistAtom } = recoilPersist();

export const dummyAtom = atom({
  key: 'dummy',
  default: false,
});

export const signupCurrentSectionAtom = atom({
  key: 'signupCurrentSection',
  default: 1,
  effects_UNSTABLE: [persistAtom],
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

export const signupDataAtom = atom<SignupInterface>({
  key: 'signupData',
  default: {
    name: '',
    email: '',
    password: '',
  },
});

export const timerAtom = atom({
  key: 'timer',
  default: {
    minute: 5,
    seconds: 0,
  },
  effects_UNSTABLE: [persistAtom],
});
