import { atom, atomFamily } from 'recoil';
import { recoilPersist } from 'recoil-persist';
const { persistAtom } = recoilPersist();

export const signupCurrentSectionAtom = atom({
  key: 'signupCurrentSection',
  default: 1,
  effects_UNSTABLE: [persistAtom],
});

export const signupEmailDuplicationModalAtom = atom({
  key: 'signupEmailDuplicationModal',
  default: false,
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

export const currentSectionsAtomFamily = atomFamily({
  key: 'currentSection',
  default: 1,
  effects_UNSTABLE: [persistAtom],
});

export const timerAtomFamily = atomFamily({
  key: 'currentTimer',
  default: {
    minute: 5,
    seconds: 0,
  },
  effects_UNSTABLE: [persistAtom],
});

export const authEmailAtomFamily = atomFamily({
  key: 'authEmail',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const modalAtomFamily = atomFamily({
  key: 'modal',
  default: false,
});

export const ImageSrcAtom = atom({
  key: 'imageSrc',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const ImagesAtom = atom({
  key: 'image',
  default: undefined,
  effects_UNSTABLE: [persistAtom],
});
