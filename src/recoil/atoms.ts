import { atom } from 'recoil';

export const inViewHeadingIdsAtom = atom<string[]>({
  key: 'inViewHeadingAtom',
  default: [],
});
export const isLoadingAtom = atom<boolean>({
  key: 'isLoadingAtom',
  default: false,
});
