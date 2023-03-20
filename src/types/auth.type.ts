import { SetterOrUpdater } from 'recoil';

export interface LoginInterface {
  email: string;
  password: string;
}

export interface SignupInterface {
  name: string;
  email: string;
  password: string;
}

export interface FindPasswordInterface {
  email: string;
  password: string;
  newPassword: string;
}

export interface AuthFormSectionPropsInterface {
  title: string;
  setSection: SetterOrUpdater<number>;
  atomKey: string;
}
