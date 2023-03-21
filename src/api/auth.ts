import { createAxios } from 'libs/createAxios';
import { getAuth, getUser } from 'libs/getUrl';
import {
  FindPasswordInterface,
  LoginInterface,
  SignupInterface,
} from 'types/auth.type';
import tokenService from 'utils/tokenService';

class Auth {
  signin(data: LoginInterface) {
    try {
      return createAxios({
        method: 'POST',
        url: getAuth.signin(),
        data: {
          email: data.email,
          password: data.password,
        },
      });
    } catch (error) {
      return error;
    }
  }

  sendSignupAuthenticationNumber(email: string) {
    try {
      return createAxios({
        method: 'POST',
        url: getAuth.sendSignupAuthenticationNumber(),
        params: {
          email: email,
        },
      });
    } catch (error) {
      return error;
    }
  }

  sendFindPasswordAuthenticationNumber(email: string) {
    try {
      return createAxios({
        method: 'POST',
        url: getAuth.sendFindPasswordAuthenticationNumber(),
        params: {
          email: email,
        },
      });
    } catch (error) {
      return error;
    }
  }

  checkAuthenticationNumber(email: string, code: string) {
    try {
      return createAxios({
        method: 'GET',
        url: getAuth.checkAuthenticationNumber(),
        params: {
          email: email,
          code: code,
        },
      });
    } catch (error) {
      return error;
    }
  }

  signup(data: SignupInterface) {
    try {
      return createAxios({
        method: 'POST',
        url: getAuth.signup(),
        data: {
          name: data.name,
          email: data.email,
          password: data.password,
        },
      });
    } catch (error) {
      return error;
    }
  }

  findPassword(data: FindPasswordInterface) {
    try {
      return createAxios({
        method: 'POST',
        url: getAuth.findPassword(),
        data: {
          email: data.email,
          password: data.password,
          newPassword: data.newPassword,
        },
      });
    } catch (error) {
      return error;
    }
  }

  changeName(name: string) {
    try {
      return createAxios({
        method: 'PATCH',
        url: getUser.changeName(),
        data: {
          name: name,
        },
        headers: {
          Authorization: 'Bearer ' + tokenService.getLocalAccessToken(),
        },
      });
    } catch (error) {
      return error;
    }
  }
}

export default new Auth();
