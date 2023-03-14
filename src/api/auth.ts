import { createAxios } from 'libs/createAxios';
import { getAuth } from 'libs/getUrl';
import { LoginInterface, SignupInterface } from 'types/auth.type';

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

  sendAuthenticationNumber(email: string) {
    try {
      return createAxios({
        method: 'POST',
        url: getAuth.sendAuthenticationNumber(),
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
}

export default new Auth();
