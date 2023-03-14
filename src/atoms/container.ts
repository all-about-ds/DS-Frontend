import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
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

export const signupEmailAtom = atom({
  key: 'signupData',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const groupPasswordModalAtom = atom({
  key: 'groupPasswordAtom',
  default: false,
});

export const groupIndexAtom = atom({
  key: 'gruopIndex',
  default: 0,
});

export const timerAtom = atom({
  key: 'timer',
  default: {
    minute: 5,
    seconds: 0,
  },
  effects_UNSTABLE: [persistAtom],
});
